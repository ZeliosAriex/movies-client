export const MQ_BREAKPOINTS = [576, 768, 992, 1200]
export const MQ_BREAKPOINT_NAMES = [
  'sm',
  'md',
  'lg',
  'xl',
] as const
export type MediaSizes = typeof MQ_BREAKPOINT_NAMES[number]

const mq: {
  [key in MediaSizes]?: string
} = {}

MQ_BREAKPOINTS.forEach((bp, idx) => {
  mq[
    MQ_BREAKPOINT_NAMES[idx]
  ] = `@media (min-width: ${bp}px)`
})

export { mq }
