import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
const Login = async() => {
  const [user, setUser] = useState({  username: "", password: ""})
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleFormValidation()) {
      // try {
      //   axios.post("http://localhost:3000/user/login", {
      //     username: user.username,
      //     password:user.password
      //   })
      //   toast.success("Login Successfully", {
      //     position: "bottom-right",
      //     onClose: 8000,
      //     pauseOnHover: true,
      //     theme:"dark"
      //   })
      // }
      // catch (error) {
      //   toast.error("Username or Password Incorrect", {
      //     position: "bottom-right",
      //     onClose: 8000,
      //     pauseOnHover: true,
      //     theme: "dark"
      //   })
      //   console.log(error)
      // }
    }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })

  }
  ////HandleFormValidatin by using tostify react
  const handleFormValidation = () => {
    const {  email, password} = user;
 
     if (email == "") {
      toast.error("Email should be filled", {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        theme: "dark"
      })
      return false
    }
    
    else if (password.length < 8) {
      toast.error("", {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        theme: "dark"
      })
    }
    else {
      return true;
    }
  }

  return (
    <div className='flex flex-col w-full h-full color bg-slate-500 justify-center items-center gap-0 '>
      <form onSubmit={handleSubmit} className='gap-2 flex flex-col bg-slate-950 rounded-md p-10'>
        <div className="flex flex-col justify-center items-center gap=5 ">
          <img className='h-60 rounded-full' src="data:image/jpeg;base64,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" alt="Lets Talk" />

          <h1 className='text-white uppercase '>Lets Talk</h1>
        </div>
        <input className='bg-transparent p-3 border-2 text-white' type="text" placeholder='Username' onChange={handleChange} value={user.username} name='username' />
        <input className='bg-transparent p-3 border-2 text-white' type="password" placeholder='Password' onChange={handleChange} value={user.password} name='password' />
        <button className='bg-green-600 p-3' type='submit'>Login</button>
        <span className='text-white uppercase'>New user? <Link to="/register" className='text-blue-800 '>SignUp</Link></span>

      </form>
      <ToastContainer />
    </div>
  )
}



export default Login
