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

## 2.2 Types of TS part One

### Basic Types

- First, there are the basic data types : number, string, boolean
- `let a : number = 1;`
- `let b : string = "foo";`
- `let c : boolean = true;`
- Second is the array of these basic data types
- `let a : number[] = [1, 2];`
- `let b : string[] = ["foo", "fow"];`
- `let c : boolean[] = [true, false];`
- As shown above, the basic syntax to type a data is by using doing `: datatype`
- When the datatype is clear, we don't need to explain to TS the datatype
- In this case, TS will implicitly guess the datatype

### Optional Type

- In an object, in order to tell typescript the property types, we use similar syntax

```
const player : {
    name : string,
    age?: number,
} = {
    name: "nico"
}
```

### Alias

- In Above code, the `?` next to age makes the age property optional
- If we want to create multiple playerObjects like the above, we need to create an Alias that can teach TS the object property types to multiple objects

```
type Player = {
    name : string,
    age? : number
}

const playerOne : Player = {
    name : "Nico"
}

const playerTwo : Player = {
    name : "Lynn",
    age : 20
}
```

- Using Alias helps you save time and make the code reusable

### Specify type of the return value of a function

- It is also possible to set the return value's type of a function
- First, when we create a function, we set type of the argument as below
- `function playerMake(name : string){}`
- In order to assign type for return value, we assign it right after argument as below

```
function playerMaker(name : string) : Player {
    return {
        name
    }
}
```

- Above function will return an object with name as property but will also know that optional age exists
- Syntax for ES6 function as below:

```
const playerMaker = (name : string) : Player => ({name})
```
