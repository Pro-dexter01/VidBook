import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axios.js'

export default function Login({ admin=false }){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [err,setErr]=useState('')
  const nav=useNavigate()

  const submit=async(e)=>{
    e.preventDefault()
    if(admin){
      if(email==='admin@vidbook.com' && password==='1234') return nav('/admin/dashboard')
      return setErr('Invalid admin credentials')
    }
    try{
      const r = await api.post('/auth/login', { email, password })
      if(r.data?.ok) nav('/')
      else setErr(r.data?.error || 'Login failed')
    }catch(e){ setErr('Login error') }
  }

  return (
    <div className='container'>
      <div className='card max-w-md mx-auto mt-6 p-6'>
        <h2 className='text-xl font-semibold'>{admin ? 'Admin Login' : 'Login'}</h2>
        {err && <div className='text-red-600'>{err}</div>}
        <form onSubmit={submit} className='space-y-3 mt-3'>
          <input className='w-full p-2 border rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
          <input className='w-full p-2 border rounded' type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
          <button className='bg-white text-purple-800 px-4 py-2 rounded w-full'>Sign in</button>
        </form>
      </div>
    </div>
  )
}
