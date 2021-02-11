import React from "react";
import Table from "react-bootstrap/Table";

// import "./style.css";

function MyTable(props) {
  return (
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>City</th>
      <th>State</th>
      <th>Email</th>
      <th>Phone</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
    {props.children}
     
  </tbody>
</Table>
  )
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.first} {props.last}
//           </li>
//           <li>
//             <strong>Email:</strong> {props.email}
//           </li>
//           <li>
//             <strong>City:</strong> {props.city}
//           </li>
//           <li>
//             <strong>State:</strong> {props.state}
//           </li>
//           <li>
//             <strong>Phone:</strong> {props.phone}
//           </li>
//         </ul>
//       </div>
//       <span onClick={() => props.removeEmployee(props.id)} className="remove">
//         x
//       </span>
//     </div>
//   );
}

export default MyTable;




