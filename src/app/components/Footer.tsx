import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <footer className='absolute left-0 right-0 flex m-auto text-center bottom-5 w-fit justify-self-center text-primary-text'>
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
