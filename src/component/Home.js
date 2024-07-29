// import React from 'react';
// import '../component/Home.css';
// import { Link } from 'react-router-dom';
// import img1 from '../image/donor.jpeg';
// import img2 from '../image/tt3.webp';
// import img3 from '../image/blood.jpeg';
// import img4 from '../image/blood.jpeg'; // Import the instruction image

// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <nav>
//           <span className="mm">Blood Bank</span>
         
//           <Link to="/Login">Login</Link>
//           <Link to="/Contact ">Contact Us</Link>
//           <a href="#instruction">Instruction</a>
//         </nav>
//         <div className="Section_top">
//           <h1>Welcome To BloodBank </h1>
//         </div>
//         <div className="section_mid">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4">
//                 <img src={img1}></img>
//                 <h3>Register as a Donor</h3>
//                 <a href="/Register"><button>Donor</button></a>
//               </div>
//               <div className="col-md-4">
//                 <img src={img3}></img>
//                 <h3>Search Blood/Plasma</h3>
//                 <a href="/Search"><button>Search</button></a>
//               </div>
//               <div className="col-md-4">
//                 <img src={img2}></img>
//                 <h3>Blood Donation Camps </h3>
//                 <a href="/RegisterCamp"><button>Register for Camp</button></a>
//               </div>
//             </div>
//           </div>
//           <div className="instruction-section" id='instruction'>
//             <div className="table-container">
//               <h2>Learn About Donation</h2>
//               <p>One Blood Donation can save upto Three Lives</p>
//               <h3>Compatible Blood Type Donors</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Blood Type</th>
//                     <th>Donate Blood To</th>
//                     <th>Receive Blood From</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>A+</td>
//                     <td>A+ AB+</td>
//                     <td>A+ A- O+ O-</td>
//                   </tr>
//                   <tr>
//                     <td>O+</td>
//                     <td>O+ A+ B+ AB+</td>
//                     <td>O+ O-</td>
//                   </tr>
//                   <tr>
//                     <td>B+</td>
//                     <td>B+ AB+</td>
//                     <td>B+ B- O+ O-</td>
//                   </tr>
//                   <tr>
//                     <td>AB+</td>
//                     <td>AB+</td>
//                     <td>Everyone</td>
//                   </tr>
//                   <tr>
//                     <td>A-</td>
//                     <td>A+ A- AB+ AB-</td>
//                     <td>A- O-</td>
//                   </tr>
//                   <tr>
//                     <td>O-</td>
//                     <td>Everyone</td>
//                     <td>O-</td>
//                   </tr>
//                   <tr>
//                     <td>B-</td>
//                     <td>B+ B- AB+ AB-</td>
//                     <td>B- O-</td>
//                   </tr>
//                   <tr>
//                     <td>AB-</td>
//                     <td>AB+ AB-</td>
//                     <td>AB- A- B- O-</td>
//                   </tr>
//                 </tbody>
//               </table>
             
//             </div>
//           </div>
//           <br />
//           <footer className="footer">
//             <p>&copy; 2024 Blood Bank System</p>
//           </footer>
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;