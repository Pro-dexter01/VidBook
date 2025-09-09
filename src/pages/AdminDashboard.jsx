import { useEffect, useState } from 'react'
import api from '../utils/axios.js'

export default function AdminDashboard(){
  const [rev, setRev] = useState(0)

  useEffect(()=>{
    api.get('/recharge/admin/revenue')
      .then(r => setRev(r.data.totalOwnerCutKobo || 0))
      .catch(()=>{})
  },[])

  return (
    <div className='container'>
      <h2 className='text-2xl font-bold mt-6'>Admin Dashboard</h2>
      <div className='grid md:grid-cols-3 gap-4 mt-4'>
        <div className='card p-4'>
          <h3 className='font-semibold'>Revenue (NGN)</h3>
          <p className='text-2xl'>₦{(rev/100).toFixed(2)}</p>
        </div>
        <div className='card p-4'>
          <h3 className='font-semibold'>Users</h3>
          <p className='text-2xl'>—</p>
        </div>
        <div className='card p-4'>
          <h3 className='font-semibold'>Recharges</h3>
          <p className='text-2xl'>—</p>
        </div>
      </div>
    </div>
  )
}
