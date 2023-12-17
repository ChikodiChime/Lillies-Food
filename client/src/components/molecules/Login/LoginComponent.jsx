import { useState } from 'react';
import Button from 'src/components/atoms/Button';
import login1 from 'src/icons/img/login1.png';
import { LoginContainer, LoginLink } from './Style';
import Logo from 'src/icons/svg/Logo';
import { NavLink } from './Style';
import axios from 'axios';
const LoginComponent = () => {

  const [data, setData] = useState({
    email: '',
    password:'',
  })

const loginUser = (e) => {
  e.preventDefault()
  axios.get('')
}

  return (
    <LoginContainer>

       <NavLink to={'/'}>
          < Logo />
          <span>Lilies</span>
        </NavLink>

      <div className="wrapper space-between">
        <div className="loginLeft">
          <img src={login1} alt="" />
        </div>

        <div className="loginRight">
       
            <form action="" onSubmit={loginUser}>
                <h1>Welcome Back!</h1>
                <input type="email" placeholder='Your Email Address'  value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                <input type="password" placeholder='Your Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}  />
                <Button 
                text= "LOGIN"
                />
            </form>

            <div className="bottom space-around">
                <LoginLink to={'/Signup'}>Create an account</LoginLink>
                <LoginLink>Forgot Password</LoginLink>
            </div>
        </div>
      </div>
    </LoginContainer>
  )
}

export default LoginComponent