import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-secondary-text/40 min-h-[28px]',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
