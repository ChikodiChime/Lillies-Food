import { useState } from 'react';
import Button from 'src/components/atoms/Button';
import heroBg1 from '../../../icons/img/hero-bg.jpg'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const heroBg ={
    backgroundImage :`url(${heroBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
  }

const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password:'',
  })

const loginUser = async(e) => {
  e.preventDefault()
  const {email, password} = data
  try {
    const {data} = await axios.post('https://lillies-food-psi.vercel.app/login', {
      email,
      password
    });
    if(data.error){
      toast.error(data.error)
    }
    else{
      setData({}) 
      navigate('/Dashboard')
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
    <div style={heroBg} className=' relative w-full h-[100vh]'>
      <div className="absolute z-0 inset-0 bg-gradient-to-t from-transparent to-black"></div>
      <div className=" h-[100vh] w-full flex items-center justify-center ">
        <div className=" p-20 w-full max-w-[600px] bg-black/70 backdrop-blur-sm ">
          <form action="" className='flex flex-col justify-center items-center' onSubmit={loginUser}>
              <h1 className=' text-4xl font-bold text-red-600 mb-5 text-center'>Welcome Back!</h1>
              <input type="email" className='w-full max-w-[400px]  h-[60px] text-black text-lg mb-10 px-5 rounded-md ' placeholder='Your Email Address'  value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
              <input type="password" className='w-full max-w-[400px]  h-[60px] text-black text-lg mb-10 px-5 rounded-md ' placeholder='Your Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}  />
              <div className="">
                <Button 
              text= "LOGIN"
              />
              </div>
              
          </form>

          <div className="bottom flex justify-between mt-5 w-full">
              <Link className= 'text-red-600 cursor-pointer' to={'/Signup'}>Create an account</Link>
              <Link>Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>

    </>
    
  )
}

export default LoginComponent