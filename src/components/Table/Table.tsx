const Table = (props: {title: string, data: [string, string][]}) => {
  return (
    <div>            
        <table>
            <thead>
                <tr>
                    <th colSpan={2}><h2>{props.title}</h2></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(([key, value], index) => (
                <tr key={index}>
                    <td>{key.replaceAll("_"," ")}</td>
                    <td>{value.replaceAll("_"," ")}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table