export default function VirtualList({data = [],renderItem,renderEmpty}) {

    return (
        !data.length ? (
            renderEmpty
        ):(
            <ul>
                {data.map((item,i) => (
                    <li key={i}>{renderItem(item)}</li>
                ))}
            </ul>
        )
    )
}