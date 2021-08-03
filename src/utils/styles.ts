import {
  LG_BREAKPOINT,
  MD_BREAKPOINT,
  SM_BREAKPOINT,
  XL_BREAKPOINT,
} from '../constants'

export const MQ_BREAKPOINTS = [
  SM_BREAKPOINT,
  MD_BREAKPOINT,
  LG_BREAKPOINT,
  XL_BREAKPOINT,
]
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
