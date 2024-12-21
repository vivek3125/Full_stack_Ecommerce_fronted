import React from 'react'
import { useState } from 'react'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
     const {register}=useContext(AppContext);
     const navigate=useNavigate();
     const [formData,setFormData]=useState({name:"",email:"",password:""})

    const onChangeHandler =(e)=>{
      const {name,value}=e.target;
      setFormData({...formData,[name]:value})
    }
    const {name,email,password}=formData;
    const submitHandler =async (e)=>{
     e.preventDefault();
     // alert("Your form has been submited");
     const result=await register(name,email,password);

     if(result.success){
          navigate('/login')
     }

     // console.log(formData)
    }

  return (
    <>
      <div className="container my-5 p-4" style={{width:"600px",border:'2px solid yellow',borderRadius:"10px"}}>
          <h1 className='text-center'>User Register</h1>
      <form className='my-3' onSubmit={submitHandler}>
      <div className="mb-3">
     <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
     <input 
     name="name" 
     value={formData.name} 
     onChange={onChangeHandler} 
     type="text" 
     className="form-control" 
     id="exampleInputEmail12" 
     aria-describedby="emailHelp"
     required
     minlength="5" 
     maxlength="20"/>
     </div>
     <div className="mb-3">
     <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
     <input name="email" value={formData.email} onChange={onChangeHandler}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     required
          />
     </div>
     <div className="mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     <input name="password" value={formData.password} onChange={onChangeHandler}  type="password" className="form-control" id="exampleInputPassword1"
     required
     minlength="5" 
     maxlength="20"/>
     </div>
     <div className='d-grid col-6 mx-auto my-3'>
     <button type="submit" className="btn btn-primary">Register</button>
     </div>
     </form>
      </div>
    </>
  )
}

export default Register
