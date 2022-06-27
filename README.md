# typescript_intro

## 1.5 Why not Javascript

- Typescript provides type safety to regular JS
- This helps JS developers to have much better and safer development experience
- Runtime Errors are errors that happen while the code is being run
- With JS, it can be a challenge to prevent a runtime error where as TS will help you prevent it by not compiling code that could have a runtime error

## 2.0 How Typescript Works

- Typescript checks our code before compiling it to JS code
- If there is any type error or possibility for runtime error, it will not compile

## 2.1 Implicit Types vs Explicit Types

- We can either implicitly or explicitly type in TS
- If we write regular JS code like `let a = "hello"; a = "bye"`, TS will implicitly understand that a is a string
- To explictly type a data, we use `:` like `let b : boolean = false`
- To type an array of numbers, `let c : number[] = []`
