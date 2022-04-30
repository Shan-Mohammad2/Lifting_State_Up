import React from 'react'

function User({parentAlert}) {
    // const data="Shan Mohammad";
    const data={
        name:"shan",
        email:"shanmohammad2071@gmail.com"
    }
    
  return (
    <div>
    
    <button onClick={()=>parentAlert(data)} className="user-button">Click me</button>
    </div>
  )
}

export default User;