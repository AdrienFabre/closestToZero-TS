export const closestToZero = (givenArray: Array<number>): number => {
  if (givenArray.length === 0) return 0

  let distanceToZero = Math.abs(givenArray[0])
  let closestToZeroIndex = 0

  for (let _i = 1; _i < givenArray.length; _i++) {
    const newDistanceToZero = Math.abs(givenArray[_i])

    if (distanceToZero > newDistanceToZero) {
      distanceToZero = newDistanceToZero
      closestToZeroIndex = _i
    }
  }

  const closestToZero = givenArray[closestToZeroIndex]
  const positiveClosestToZero = Math.abs(closestToZero)

  if (givenArray.includes(positiveClosestToZero)) {
    return positiveClosestToZero
  } else return closestToZero
}
