import Link from 'next/link'
import AuthButton from './AuthButton'

export default function NavBar() {
  return (
    <header className='text-white border-b-2 bg-primary border-border'>
      <nav className='flex items-center justify-between h-16 p-2 m-auto max-w-7xl'>
        <ul className='flex gap-3'>
          <li>
            <Link href='/'>Overview</Link>
          </li>
          <li>
            <Link href='/'>Customers</Link>
          </li>
          <li>
            <Link href='/'>Products</Link>
          </li>
          <li>
            <Link href='/'>Settings</Link>
          </li>
        </ul>
        <AuthButton />
      </nav>
    </header>
  )
}
