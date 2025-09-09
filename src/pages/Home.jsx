import RechargeForm from './RechargeForm.jsx'
import AdBanner from '../components/AdBanner.jsx'

export default function Home(){
  return (
    <div className='container pb-24'>
      <h2 className='text-2xl font-semibold mt-6'>Chat (demo)</h2>
      <div className='card mt-4'>This demo chat uses your mobile data; messages are free.</div>
      <h3 className='text-xl mt-6'>Recharge</h3>
      <div className='card mt-2'><RechargeForm/></div>
      <AdBanner/>
    </div>
  )
}
