import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import NavBar from '@/components/NavBar'
// import { Suspense } from 'react'
// import Loading from './loading'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  )
}
