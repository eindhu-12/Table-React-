
const Table = ({heading , data} ) => {
    // console.log("data:-", data)
    // console.log("heading",heading)
  return (
    <>
    <table border={1} cellSpacing={0}>
        <thead >
    
            <tr>
                {heading.map((tableHead,index)=>(
                    <>
                        <th key={index}>{tableHead} </th>
                    </>
                ))}
            </tr>
            
        </thead>
        <tbody>
            {
                data.map((row, index)=>(
                    <>
                    <tr key={index}>
                        {heading.map((column , index)=>(
                            <>
                            <td key={index}>{row[column]}</td>
                            </>
                        ))}
                    </tr>
                    
                    </>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default Table
