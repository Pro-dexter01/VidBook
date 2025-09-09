import { Link } from 'react-router-dom'
export default function Navbar(){
  return (
    <header className='header'>
      <div className='container flex items-center'>
        <img src='/logo.png' alt='logo' className='h-10 rounded mr-3' />
        <div className='font-bold text-xl'>VidBook</div>
        <nav className='ml-auto space-x-4'>
          <Link to='/' className='text-sm'>Home</Link>
          <Link to='/income' className='text-sm'>Income</Link>
          <Link to='/login' className='text-sm'>Login</Link>
          <Link to='/admin/login' className='text-sm'>Admin</Link>
        </nav>
      </div>
    </header>
  )
}
