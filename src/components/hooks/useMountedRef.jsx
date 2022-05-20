import { useEffect, useRef } from "react";

export function useMountedRef() {
    const mounted = useRef(false)
    useEffect(() => {
        mounted.current = true
        return () => (mounted.current = false) //アンマウント時に返される
    }) //未指定の場合、コンポーネント描画毎に実行
    return mounted
}