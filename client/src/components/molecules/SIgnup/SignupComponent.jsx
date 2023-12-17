import { useState } from 'react';
import Button from 'src/components/atoms/Button';
import signup1 from 'src/icons/img/signup1.png';
import { LoginContainer, LoginLink, NavLink } from './Style';
import Logo from 'src/icons/svg/Logo';
const SignupComponent = () => {
const [data, setData] = useState({
  name: '',
  email: '',
  password: '',
})
const registerUser = (e) => {
  e.preventDefault()
}


  return (
    <LoginContainer>

       <NavLink to={'/'}>
          < Logo />
          <span>Lilies</span>
        </NavLink>

      <div className="wrapper space-between">
        <div className="loginLeft">
          <img src={signup1} alt="" />
        </div>

        <div className="loginRight">
       
            <form action="" onSubmit={registerUser}>
                <h1>Welcome to Lilies!</h1>
                <input type="text" placeholder='Your FullName' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                <input type="email" placeholder='Your Email Address' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                <input type="password" placeholder='Your Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                <Button 
                text= "SIGN UP"
                />
            </form>

            <div className="bottom space-around">
                <span>Already have an account? 
                  <LoginLink to={'/Login'}> Login</LoginLink>
                </span>
               
            </div>
        </div>
      </div>
    </LoginContainer>
  )
}

export default SignupComponent