import { useState } from 'react'
import api from '../utils/axios.js'

export default function RechargeForm(){
  const [email,setEmail]=useState('')
  const [amount,setAmount]=useState('')
  const [file,setFile]=useState(null)
  const [msg,setMsg]=useState('')

  async function submit(e){
    e.preventDefault()
    if(!email||!amount) return setMsg('Provide email and amount')
    try{
      const fd = new FormData()
      fd.append('email', email)
      fd.append('amountNaira', amount)
      if(file) fd.append('receipt', file)
      const r = await api.post('/recharge', fd, { headers:{ 'Content-Type':'multipart/form-data' } })
      if (r.data?.status === 'approved') {
        setMsg(`Approved. Credited ₦${(r.data.credited/100).toFixed(2)}. Owner got ₦${(r.data.ownerCut/100).toFixed(2)}.`)
      } else {
        setMsg('Failed: ' + (r.data?.reason || 'Unknown'))
      }
    }catch(e){
      setMsg('Network/server error: ' + (e?.response?.data?.reason || e.message))
    }
  }

  return (
    <form onSubmit={submit} className='space-y-3'>
      <input className='w-full p-2 border rounded' placeholder='Your account email' value={email} onChange={e=>setEmail(e.target.value)} />
      <input className='w-full p-2 border rounded' placeholder='Amount (NGN)' value={amount} onChange={e=>setAmount(e.target.value)} />
      <input type='file' onChange={e=>setFile(e.target.files[0])} />
      <div><button className='bg-white text-purple-800 px-4 py-2 rounded'>Submit Recharge</button></div>
      {msg && <div className='text-sm mt-2'>{msg}</div>}
    </form>
  )
}
