# hyper-reducer

A generalization of `reduce()` to arbitrary arity.


## Introduction

Reduction is a key concept in functional programming which encapsulates the idea of recursively transforming state based on a sequence of input. More concretely, `reduce()` takes two values (one of which is the previous output), and returns another value. In contrast, `reduceN()` takes `N + 1` values (it has arbitrary arity). Although `reduceN()` can ultimately be *reduced to* regular `reduce()`, the construction makes certain operations easier to understand and implement.


## Insallation

```sh
npm i hyper-reducer
```


## Usage

```js
import hyperReducer from 'hyper-reducer'

const reduce2 = hyperReducer(2) // Reduction with arity 2.

const array = [1, 2, 3, 4, 5, 6]

reduce2(array, (a, b0, b1) => a*b0 + b1, initial=[1, 1]) // Returns 10
```

The `hyperReducer()` function takes an arity argument and returns a concrete reducer with that arity. The reducer then takes an array, callback function and (optional) initial set of previous outputs. The initial outputs are set to zero by default.
