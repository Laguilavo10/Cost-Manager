import Link from 'next/link'
import AuthButton from './AuthButton'
import GithubButton from './GithubButton'
import LinkNav from './LinkNav'

const Links = [
  {
    name: 'Dashboard',
    path: 'dashboard'
  },
  {
    name: 'Movements',
    path: 'movements'
  }
]
export default function NavBar() {
  return (
    <header className='text-white border-b-2 bg-primary border-border'>
      <nav className='flex items-center justify-between h-16 p-2 m-auto max-w-7xl'>
        <div className='flex items-center gap-3'>
          <Link className='items-center hidden text-2xl font-bold md:flex' href='/'>
            Cost-Manager
          </Link>
          <GithubButton />
        </div>
        <div className='flex items-center space-x-4 lg:space-x-6'>
          {Links.map(({ name, path }) => (
            <LinkNav name={name} path={path} key={path} />
          ))}

          <AuthButton />
        </div>
      </nav>
    </header>
  )
}
