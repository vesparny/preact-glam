/** @jsx h */
import glam from '../index'

test('should pass glam object prop', () => {
  const Comp = glam('div')({
    marginLeft: 1
  })
  expect(Comp).toBeDefined()
})
