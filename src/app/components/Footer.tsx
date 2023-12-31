import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <footer className='flex m-auto my-5 text-center w-fit justify-self-center text-primary-text !mt-16 absolute bottom-1 left-0 right-0'>
      Made with ❤️ by
      <Link
        href='https://andres-laguilavo.vercel.app/'
        className='pl-1 text-white transition-colors duration-200 ease-in border-b border-white border-dashed hover:border-secondary hover:text-secondary'
      >
        @laguilavo10
      </Link>
    </footer>
  )
}
