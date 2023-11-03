import Link from 'next/link'
import AuthButton from './AuthButton'
import GithubButton from './GithubButton'
import { getSession } from '@auth0/nextjs-auth0'

export default async function NavBar() {
  const session = await getSession()
  return (

    <header className='text-white border-b-2 bg-primary border-border'>
      <nav className='flex items-center justify-between h-16 p-2 m-auto max-w-7xl'>
        <div className='flex items-center gap-3'>
          <Link
            className='items-center hidden text-2xl font-bold md:flex'
            href='/'
            id='title'
            role='heading'
          >
            Cost-Manager
          </Link>
          <GithubButton />
        </div>
        <div className='flex items-center space-x-4 lg:space-x-6'>
          <AuthButton session={session} />
        </div>
      </nav>
    </header>
  )
}
