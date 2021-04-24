import { arraySum } from '@/array-sum'

describe('array-sum', () => {
  it('should be defined', () => {
    expect(arraySum).toBeDefined()
  })

  it('should count correctly', () => {
    expect(arraySum([1, 2, 3])).toBe(6)
  })
})
