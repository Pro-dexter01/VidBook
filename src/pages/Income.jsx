import { useState } from 'react'
import api from '../utils/axios.js'

export default function Income(){
  const [email,setEmail]=useState('')
  const [balance,setBalance]=useState(null)
  const [msg,setMsg]=useState('')

  const check = async ()=>{
    try{
      const r = await api.get('/recharge/income', { params:{ email } })
      setBalance(r.data.balanceKobo || 0)
    }catch(e){ setMsg('Error fetching balance') }
  }

  return (
    <div className='container'>
      <div className='card max-w-md mx-auto mt-6 p-6'>
        <h2 className='text-xl font-semibold'>Income / Wallet</h2>
        <p className='text-sm'>Enter your account email to see your balance</p>
        <input className='w-full p-2 border rounded mt-3' placeholder='Account email' value={email} onChange={e=>setEmail(e.target.value)} />
        <div className='mt-3 flex gap-2'><button className='bg-white text-purple-800 px-4 py-2 rounded' onClick={check}>Check</button></div>
        {balance !== null && <div className='mt-3'>Balance: ₦{(balance/100).toFixed(2)}</div>}
        {msg && <div className='text-red-600 mt-2'>{msg}</div>}
      </div>
    </div>
  )
}
