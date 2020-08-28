import React from "react";

function Employee(props) {
    return (
        <div>
        <div>
            <h1>
                Welcome To The Employee Search Page
            </h1>
        
        </div>
        <div>
        <table>
            <thead>
                <th><a onClick ={()=>props.SortByFirst()} >Firstname</a></th>
                <th><a>Lastname</a></th>
            </thead>
            {props.results.map(result=>(
                <tr key={result.cell}>
                    <td>{result.name.first}</td>
                    <td>{result.name.last}</td>
                    <td>{result.cell}</td>
                    <td>{result.email}</td>
                </tr>
            )
            )}
           
        </table>
        </div> 
        </div>
    )
}

export default Employee; 


