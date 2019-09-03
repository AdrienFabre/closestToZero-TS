import { closestToZero } from './main'

describe('closestToZero', () => {
  describe('should return the integer closest to zero', () => {
    test('given an array of positive integers', () => {
      const givenInput = [8, 5, 10]
      const expectedOutput = 5
      expect(closestToZero(givenInput)).toEqual(expectedOutput)
    })

    test('given an array of positive and negative integers', () => {
      const givenInput = [5, 4, -9, 6, -10, -1, 8]
      const expectedOutput = -1
      expect(closestToZero(givenInput)).toEqual(expectedOutput)
    })
  })

  describe('should return the positive integer closest to zero', () => {
    test('given an array with opposite integers where the positive is first encountered', () => {
      const givenInput = [8, 2, 3, -2]
      const expectedOutput = 2
      expect(closestToZero(givenInput)).toEqual(expectedOutput)
    })

    test('given an array with opposite integers where the negative is first encountered', () => {
      const givenInput = [8, -2, 3, 2]
      const expectedOutput = 2
      expect(closestToZero(givenInput)).toEqual(expectedOutput)
    })
  })

  describe('should return zero', () => {
    test('given an empty array', () => {
      const givenInput: Array<number> = []
      const expectedOutput = 0
      expect(closestToZero(givenInput)).toEqual(expectedOutput)
    })
  })
})
