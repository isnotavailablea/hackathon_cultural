import React, {  useState } from 'react'

function Login() {
  const [pg,setPg]=useState(true)
  return (
    <>
    {pg && (<div className='Login-box'>
    <div className="fill-user">
      username
    </div>
    <input type="text" className='sensitive login-user'/>
    <div className="fill-pass">
      password
    </div>
    <input type="password" className='sensitive login-pass' />
    <div className="placebtn"><button>Login</button></div>
    <div className="redirect-login">
      <button onClick={()=>setPg(false)}>Signup</button>
    </div>
</div>)}
  {
    !pg && <div className="signup-box">
      <div className="name">
          name
      </div>
      <input type="text" />
      <div className="username">
          username
      </div>
      <input type="text" />
      <div className="passwor">
          password
      </div>
      <input type="password" />
      <div className="submit-signup"><button>Sign up</button></div>
      <div className="redirect-login" >
        <button onClick={()=>setPg(true)}>Login</button>
      </div>
    </div>
    
  }
  </>
  )
}

export default Login