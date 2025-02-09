import Table from "../../Custom_Components/Table/Table"
import { StaffData } from "../../Data/Satff"


const Staff = () => {
  return (
    <>
    <h1>
        Staff Data:-
    </h1>
    <Table heading={Object.keys(StaffData[0])} data={StaffData} />
    </>
  )
}

export default Staff


// const Staff = () => {
//     console.log(StaffData)
//   return (
//     <>
//     <h1>Staff Data:-</h1>
//     <table border={1} cellSpacing={0}>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Department</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         StaffData.map((staff,index)=>(
//                             <>
//                             <tr key={index}>
//                                 <td>{staff.id}</td>
//                                 <td>{staff.name}</td>
//                                 <td>{staff.age} </td>
//                                 <td>{staff.Department} </td>
//                             </tr>
//                             </>
//                         ))
//                     }
//                 </tbody>
//               </table>
//     </>
//   )
// }

// export default Staff
