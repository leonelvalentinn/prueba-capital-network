export const BatteryIcon = ({ className }: { className?: string }) => {
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
      className={`icon icon-tabler icons-tabler-outline icon-tabler-battery-3 ${className || ''}`}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2' />
      <path d='M7 10l0 4' />
      <path d='M10 10l0 4' />
      <path d='M13 10l0 4' />
    </svg>
  )
}
