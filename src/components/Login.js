import React, { useEffect } from 'react';
import {Box,Typography,Button,TextField} from '@mui/material';
import logo from '../images/fikkalogo.png';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';
import apis from '../axios/api';
import { useNavigate } from 'react-router-dom';
import { setAuthorizationToken } from '../axios/instance';


function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('token');
    if(auth){
      setAuthorizationToken(localStorage.getItem('token'));
      navigate('/dashboard');
    }
  },[])

  
  const initialValues = {
    username:"",
    password:""
}
const OnHandleSubmit = async (values) => {
    try{
       const result = await apis.loginWithEmailAndPassword(values.username,values.password)
       console.log(result)
       if(result.data){
        localStorage.setItem('token',JSON.stringify(result.data.access_token));
        console.log(result.data)
        setAuthorizationToken(result.data.access_token)
        navigate("/dashboard")
       }
    }catch{

    }
}

    const {values, errors,touched, handleBlur,handleChange,handleSubmit } = useFormik({
        initialValues,
        validationSchema:loginSchema,
        onSubmit:OnHandleSubmit
    });
  return (
    <div className='cover' >
     <Box sx={{width:'100%',height:'100%',background:'#00000091'}} >
       <Box sx={{width: "528px",height: "372.188px",background:'#C9234A',display:'flex',flexDirection:'column',borderRadius: 2}} className='card'>
         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'90%',margin:'auto'}} >
            <img src={logo} alt="" />
            <Typography variant='h4' sx={{color:'white',marginTop:'20px',fontWeight:'300'}} >
                Admin Dashboard
            </Typography>
         </Box>
        <Box sx={{width:"80%"}} margin="auto">
        <form autoComplete='off' onSubmit={handleSubmit} >
        <Typography sx={{fontWeight:'500',color:'white',fontSize:"18.339px"}}>Username</Typography>
        <TextField type='text' value={values.username}  name="username" onChange={handleChange} onBlur={handleBlur} fullWidth placeholder='Enter Username' sx={{'& .MuiInputBase-input':{color: 'white'}, marginBottom:'10px', fontWeight:'500',background:'rgba(255, 255, 255, 0.27)',borderRadius: 1,border: 'none',"& fieldset": { border: 'none' }}}/>
        {errors.username && touched.username ? <Typography sx={{color:'white'}} >{errors.username}</Typography> : null}
        <Typography  sx={{fontSize:'18.339px',fontWeight:'500',color:'white'}}>Password</Typography>
        <TextField  type='password' value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} fullWidth placeholder='Enter Password' sx={{'& .MuiInputBase-input':{color: 'white'},fontWeight:'500',background:'rgba(255, 255, 255, 0.27)',borderRadius: 1,border: 'none',"& fieldset": { border: 'none' }}} />
        {errors.password && touched.password ? <Typography sx={{color:'white'}}>{errors.password}</Typography> : null}
        <Button type='submit'  variant='contained' sx={{padding:'10px',fontWeight:'700', width: "100%",marginTop:"20px", marginBottom:'20px',backgroundColor:'white',color:'#C9234A','&:hover':{backgroundColor:"white"}}}>Login</Button>
        </form>
        </Box>
       </Box>
     </Box>
    </div>
  )
}

export default Login
