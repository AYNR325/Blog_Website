import React from 'react'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
          dispatch(logout())
          window.location.href="/login"
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
