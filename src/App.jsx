import {useDispatch} from 'react-redux'
import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet } from'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  }, [])
  
  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-[#FFF6F4] '>
    <div className='w-full block'>
      <Header />
      <main className='min-h-[80vh]  md:min-h-[70vh]'> 
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  ):null

}

export default App
