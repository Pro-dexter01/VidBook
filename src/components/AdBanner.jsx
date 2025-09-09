import { useEffect } from 'react'
export default function AdBanner(){
  useEffect(()=>{ try{ (window.adsbygoogle = window.adsbygoogle||[]).push({}) }catch{} },[])
  return (
    <div className='fixed bottom-0 left-0 w-full bg-white text-black'>
      <ins className='adsbygoogle block' style={{display:'block',height:60}} data-ad-client='ca-pub-xxxxxxxxxxxxxxxx' data-ad-slot='1234567890' data-ad-format='auto' data-full-width-responsive='true'></ins>
    </div>
  )
}
