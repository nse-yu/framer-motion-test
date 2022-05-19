import { memo } from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { useCallback } from "react"
import { useMemo } from "react"

/**
 * 
 * @param {items} レポジトリ一覧
 * @returns カスタムフック
 */
export const useIterator = (items=[],initialIndex = 0) => {
    const [index,setIndex] = useState(initialIndex)

    //TODO:functionは参照型のため、インスタンスが無駄に生成されないようにメモ化する
    const prev = useCallback(() => {
        if(index === 0){
            setIndex(items.length - 1)
        }
        setIndex(index-1)
    },[index])

    const next = useCallback(() => {
        if(index === items.length -1){
            setIndex(0)
        }
        setIndex(index+1)
    },[index])

    //indexに依存
    const item = useMemo(() => items[index],[index])

    return [item||items[0],prev,next]
}

useIterator.proptypes = {
    items:PropTypes.array,
    initialIndex:PropTypes.number
}

