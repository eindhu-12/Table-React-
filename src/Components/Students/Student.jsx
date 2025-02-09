import Table from "../../Custom_Components/Table/Table"
import { StudentData } from "../../Data/Student"


const Student = () => {
    console.log(StudentData)
  return (
    <>
    <h1>Student Data:-</h1>
    <Table  heading={Object.keys(StudentData[0])} data={StudentData}/>
    </>
  )
}

export default Student

// const Student = () => {
//     console.log(StudentData)
//     return (
//       <>
//           <h1>
//               Student Data:-
//           </h1>
//           <table border={1} cellSpacing={0}>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Course</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     StudentData.map((student,index)=>(
//                         <>
//                         <tr key={index}>
//                             <td>{student.id}</td>
//                             <td>{student.name}</td>
//                             <td>{student.age} </td>
//                             <td>{student.course} </td>
//                         </tr>
//                         </>
//                     ))
//                 }
//             </tbody>
//           </table>
//       </>
//     )
//   }

//export default Student
  