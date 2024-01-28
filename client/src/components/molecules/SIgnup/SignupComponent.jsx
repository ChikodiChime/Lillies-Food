import { useState } from 'react';
import Button from 'src/components/atoms/Button';
import heroBg1 from '../../../icons/img/hero-bg.jpg'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

const SignupComponent = () => {

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
  name: '',
  email: '',
  password: '',
})
const registerUser = async(e) => {
  e.preventDefault();
  const {name, email, password} = data
  try {
    const {data} = await axios.post('/register', {
      name, email, password
    })
    if (data.error){
      toast.error(data.error)
    }else{
      setData({})
      toast.success('Login Successful. Welcome')
      navigate('/login')
    }
  } catch (error) {
    console.log(error)
  }
}


  return (
    <>
      <div style={heroBg} className=' relative w-full h-[100vh]'>
        <div className="absolute z-0 inset-0 bg-gradient-to-t from-transparent to-black"></div>
        <div className=" h-[100vh] w-full absolute  flex items-center justify-center ">
     
        <div className="loginRight w-full max-w-[600px] p-20 bg-black/70 backdrop-blur-sm">
       
            <form className='flex flex-col items-center justify-center' action="" onSubmit={registerUser}>
                <h1 className=' text-4xl font-bold text-red-600 mb-5 text-center' >Welcome to Lilies!</h1>
                <input type="text"  className=' w-full max-w-[400px]  h-[60px] text-black text-lg mb-10 px-5 rounded-md ' placeholder='Your FullName' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                <input type="email"  className=' w-full max-w-[400px]  h-[60px] text-black text-lg mb-10 px-5 rounded-md ' placeholder='Your Email Address' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                <input type="password" className=' w-full max-w-[400px]  h-[60px] text-black text-lg mb-10 px-5 rounded-md ' placeholder='Your Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                <Button 
                text= "SIGN UP"
                />
            </form>

            <div className="bottom flex justify-between items-center  mt-5 w-full">
                <span className='text-center w-full'>Already have an account? 
                  <Link className= 'text-red-600 cursor-pointer' to={'/Login'}> Login</Link>
                </span>
               
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignupComponent