export const CarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-car ${className || ''}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5' />
    </svg>
  )
}
