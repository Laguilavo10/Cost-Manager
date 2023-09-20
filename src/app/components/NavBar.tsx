import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header className='bg-primary text-white'>
      <nav className='max-w-7xl m-auto flex py-2 justify-between items-center'>
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
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  )
}
