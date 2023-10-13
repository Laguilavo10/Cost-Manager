'use client'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { Button, type ButtonProps } from './ui/button'

interface Props
  extends React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
  > {
  children: React.ReactNode
  onSubmit?: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>
  buttonProperties?: ButtonProps
  formRef?: React.RefObject<HTMLFormElement>
}

export function Form({
  children,
  onSubmit,
  // dont use ref as a prop, it will not work, better use formRef
  formRef,
  buttonProperties,
  ...formProperties
}: Props) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    setIsLoading(true)

    if (onSubmit === undefined) {
      return
    }
    try {
      // dont use evt.preventDefault() on submit function or it will not work, it is already used on handleSubmit
      await onSubmit(evt)
    } catch (error) {
      toast.error(
        `Hubo un error al enviar el formulario : ${error?.toString()}`
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} {...formProperties}>
      {children}
      <Button type='submit' disabled={isLoading} {...buttonProperties}>
        {isLoading ? <Spinner /> : buttonProperties?.value ?? 'Submit'}
      </Button>
    </form>
  )
}

export const Spinner = () => {
  return (
    <svg
      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  )
}
