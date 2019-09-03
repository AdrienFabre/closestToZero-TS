# Closest to Zero

The function “closestToZero()” takes an array of positive and negative integers and returns the closest number to zero.

This function is written with TypeScript and tested with Jest.

## Edge cases

- if there are opposite numbers, the function returns the positive one

- if the input array is undefined or empty, the function returns 0

## Installation

```bash
npm install
```

## Run test

```bash
npm test
```

## Results tests

```bash
PASS src/main.spec.ts
  closestToZero
    should return the integer closest to zero
      ✓ given an array of positive integers (4ms)
      ✓ given an array of positive and negative integers (1ms)
    should return the positive integer closest to zero
      ✓ given an array with opposite integers where the positive is first encountered
      ✓ given an array with opposite integers where the negative is first encountered (1ms)
    should return zero
      ✓ given an empty array

|------------|------------|------------|------------|------------|---------------------|
| File       | % Stmts    | % Branch   | % Funcs    | % Lines    | Uncovered Line #s   |
| ---------- | ---------- | ---------- | ---------- | ---------- | ------------------- |
| All files  | 100        | 100        | 100        | 100        |                     |
| main.ts    | 100        | 100        | 100        | 100        |                     |
| ---------- | ---------- | ---------- | ---------- | ---------- | ------------------- |
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.899s, estimated 2s
Ran all test suites.
```

## Acceptance criteria

```bash
closestToZero([8, 5, 10])
5
```

```bash
closestToZero([5, 4, -9, 6, -10, -1, 8])
-1
```

```bash
closestToZero([8, 2, 3, -2])
2
```

```bash
closestToZero([8, -2, 3, 2])
2
```

```bash
closestToZero([])
0
```

## Comments

- I used Test Driven Development to answer the acceptance criteria, one test at a time, red, green, refactor.
- Due to the size of this test, I did not push after each successful test to Github, I only pushed the final result.
- The .vscode line I inserted in the .gitignore contains auto-formating onSave with Prettier and Eslint for TypeScript.
  