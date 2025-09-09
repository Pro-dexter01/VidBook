import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/axios.js'

export default function Register(){
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()
  const [err,setErr]=useState('')

  const submit = async (e)=>{
    e.preventDefault()
    try{
      const r = await api.post('/auth/register', { email, name, password })
      if(r.data?.ok) nav('/login')
      else setErr('Register failed')
    }catch(e){ setErr('Register error') }
  }

  return (
    <div className='container'>
      <div className='card max-w-md mx-auto mt-6 p-6'>
        <h2 className='text-xl font-semibold'>Create account</h2>
        {err && <div className='text-red-600'>{err}</div>}
        <form onSubmit={submit} className='space-y-3 mt-3'>
          <input className='w-full p-2 border rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
          <input className='w-full p-2 border rounded' placeholder='Name' value={name} onChange={e=>setName(e.target.value)} />
          <input className='w-full p-2 border rounded' type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
          <button className='bg-white text-purple-800 px-4 py-2 rounded w-full'>Sign up</button>
        </form>
      </div>
    </div>
  )
}
