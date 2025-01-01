import React from 'react'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
          dispatch(logout())
          
          navigate('/login')
          // window.location.href="/login"
    })
    // setPosts([])
    // window.location.href="/login"
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-[#FB3640] hover:text-white rounded-full' 
    onClick={logoutHandler}>
      Logout
      </button>
  )
}

export default LogoutBtn
