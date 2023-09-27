import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <footer className='flex m-auto my-5 text-center w-fit justify-self-center text-primary-text'>
      Made with ❤️ by
      <Link
        href='https://github.com/Laguilavo10'
        className='pl-1 text-white transition-colors duration-200 ease-in border-b border-white border-dashed hover:border-secondary hover:text-secondary'
      >
        @laguilavo10
      </Link>
    </footer>
  )
}
