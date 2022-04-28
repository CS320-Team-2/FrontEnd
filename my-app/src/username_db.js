// import React from "react";

// const fetchData = () => {
//     fetch( "https://localhost:3000/employee/123")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setCurrentUser(data)
//       })
//   }
// useEffect(() => {
//     fetchData()
//   }, [])
//   return (
//     <div>
//       <h1>{currentUser.name}</h1>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';

var id=0;

const App = () => {
const [currentUser, setCurrentUser] = useState(null);
const url = "https://api.adviceslip.com/advice";
const url2 = "http://localhost:3000/employees/2";
const fetchData = () => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        // setCurrentUser(data)
        // data = JObject.Parse(json)["id"].ToString();
        let obj = JSON.stringify(data);
        // const obj = JSON.parse(data).ToString();
        // console.log("************",obj);
        setCurrentUser(data.slip.advice)
        id = data.slip.id;
        // setCurrentUser()
        // setCurrentUser(obj.slip.advice);
      })
  }
useEffect(() => {
    fetchData()
  }, [])
  return (
    // <div>
   <p> {currentUser}</p>
        // {/* <p>User Name:</p> */}
      // <p>{currentUser}</p>
    // </div>
  );
};

export {App,id};
// const id =,id 3;

// export  {App,id};
// export var obj;

// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [currentUser, setUser] = useState("");
//     const fetchData = async() => {
//         // const url = "https://localhost:3000/employee/1";
//         const url ="https://api.adviceslip.com/advice";
//         try {
//             const data = await fetch(url);
//             const json = await data.json();
//             console.log(json.slip.advice);
//             setUser(data);

//         } catch (error) {
//             console.log("error", error);
//         }
//     };
// //     // fetch("https://localhost:3000/employee/1")
// //     fetch("https://api.adviceslip.com/advice")
// //       .then(response => {
// //         return response.json()
// //       })
// //       .then(data => {
// //         setCurrentUser(response.slip.advice)
// //       })
// //   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   return (
//         <p>{currentUser}</p>
//   );
// };
// export default App;

// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [advice, setAdvice] = useState("");

//     useEffect(() => {
//         const url = "https://api.adviceslip.com/advice";

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const json = await response.json();
//                 console.log(json.slip.advice);
//                 setAdvice(json.slip.advice);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//             <p>{advice}</p>
//     );
// };
// export default App;


// import React, { useEffect, useState } from "react";
// const App = () => {
//     const [advice, setAdvice] = useState("");

//     useEffect(() => {
//         const url = "https://api.adviceslip.com/advice";
//         const url2 = "http://localhost:3000/employees/2"

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url2);
//                 const json = await response.json();
//                 // JSON.stringify(obj)
//                 // console.log(json.slip.advice);
//                 // setAdvice(json.slip.advice);
//                 // console.log("JSON EMAIL",json['email']);
//                 // setAdvice(json['email']);
//                 setAdvice(JSON.stringify(json));
//                 // setAdvice("hi")
//                 // setAdvice(json.slip.advice);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//         {/* <p>holde2r {holder}</p> */}
//             <p>Advice: {advice}</p></div>
//     );
// };

// export default App;
