import Link from 'next/link'
import AuthButton from './AuthButton'

export default function NavBar() {
  return (
    <header className='bg-primary text-white '>
      <nav className='max-w-7xl m-auto flex p-2 justify-between items-center h-16'>
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
