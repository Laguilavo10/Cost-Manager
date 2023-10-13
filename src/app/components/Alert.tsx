'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useState } from 'react'
import { Spinner } from './Form'

interface Props {
  children: React.ReactNode
  title: string
  description: string
  cancelButton: string
  mainButton: string
  mainButtonAction: () => Promise<void> | void
}
export default function Alert({
  children,
  title,
  description,
  cancelButton = 'Cancel',
  mainButton,
  mainButtonAction
}: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleAction = async () => {
    setIsLoading(true)
    try {
      await mainButtonAction()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
      setIsOpen(false)
    }
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            {cancelButton}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleAction} type='button'>
            {isLoading ? <Spinner /> : mainButton}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
