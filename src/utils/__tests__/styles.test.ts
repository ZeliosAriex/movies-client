import { mq } from '../styles'
import {
  LG_BREAKPOINT,
  MD_BREAKPOINT,
  SM_BREAKPOINT,
  XL_BREAKPOINT,
} from '../../constants'

test('Media query breakpoints are formed correctly', () => {
  // Arrange & Act
  const smMQ = mq.sm
  const mdMQ = mq.md
  const lgMQ = mq.lg
  const xlMQ = mq.xl
  const expectedSmMQ = `@media (min-width: ${SM_BREAKPOINT}px)`
  const expectedMdMQ = `@media (min-width: ${MD_BREAKPOINT}px)`
  const expectedLgMQ = `@media (min-width: ${LG_BREAKPOINT}px)`
  const expectedXlMQ = `@media (min-width: ${XL_BREAKPOINT}px)`

  // Assertions
  expect(smMQ).toEqual(expectedSmMQ)
  expect(mdMQ).toEqual(expectedMdMQ)
  expect(lgMQ).toEqual(expectedLgMQ)
  expect(xlMQ).toEqual(expectedXlMQ)
})
