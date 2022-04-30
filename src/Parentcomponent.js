import React, { useState } from 'react'
import User from './User';
function Parentcomponent() {
    const [user,setUser]=useState({});

          function parentAlert(data){
            setUser(data);
          }
  return (
    <div className="App">
           <h1>Lifting State Up</h1>
           <p>User name:{user.name}</p>
           <p>Uaer Id: {user.email}</p>
           <User parentAlert={ parentAlert}  />
         </div>
  )
}

export default Parentcomponent;
// import User from './User';
// import './App.css';

// function App() {

//   function parentAlert(data){
//       alert(data.name);
//       console.log(data);
//   }
//   return (
//     <div className="App">
//       <h1>Lifting State Up</h1>
//       <User alert={parentAlert} />
//     </div>
//   );
// }

// export default App;