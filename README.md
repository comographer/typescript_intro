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

```ts
let a: number = 1;
let b: string = "foo";
let c: boolean = true;
```

- Second is the array of these basic data types

```ts
let a: number[] = [1, 2];
let b: string[] = ["foo", "fow"];
let c: boolean[] = [true, false];
```

- As shown above, the basic syntax to type a data is by using doing `: datatype`
- When the datatype is clear, we don't need to explain to TS the datatype
- In this case, TS will implicitly guess the datatype

### Optional Type

- In an object, in order to tell typescript the property types, we use similar syntax

```ts
const player: {
  name: string;
  age?: number;
} = {
  name: "nico",
};
```

### Alias

- In Above code, the `?` next to age makes the age property optional
- If we want to create multiple playerObjects like the above, we need to create an Alias that can teach TS the object property types to multiple objects

```ts
type Player = {
  name: string;
  age?: number;
};

const playerOne: Player = {
  name: "Nico",
};

const playerTwo: Player = {
  name: "Lynn",
  age: 20,
};
```

- Using Alias helps you save time and make the code reusable

### Specify type of the return value of a function

- It is also possible to set the return value's type of a function
- First, when we create a function, we set type of the argument as below

```ts
function playerMaker(name: string) {}
```

- In order to assign type for return value, we assign it right after argument as below

```ts
function playerMaker(name: string): Player {
  return {
    name,
  };
}
```

- Above function will return an object with name as property but will also know that optional age exists
- Syntax for ES6 function as below:

```ts
const playerMaker = (name: string): Player => ({ name });
```

## 2.3 Types of TS part Two

### readonly

- You can set a data as readonly and it will be unchangeable

```ts
type Player = {
  readonly name: string;
  age?: number;
};

const numbers: readonly number[] = [1, 2, 3, 4];

const names: readonly string[] = ["1", "2"];
```

- Keep in mind that this protection only works while you are in TS

### Tuple

- Tuple allows you to create an array with minimum length and specified data types

```ts
const player: [string, number, boolean] = ["como", 1, true];
```

### Others

- TS also have `undefined` and `null` from JS

```ts
let a: undefined = undefined;
let b: null = null;
```

- When you use `any`, you are basically escaping the TS land
- Using `any` will not provide you the protection that TS offers but sometimes it is needed

## 2.4 Types of TS part Three

### unknown

- The whole point of using TS is to explain the types to TS to help us making mistakes
- In case we don't know the type, we can use `unknown`
- When we use `unknown` we will need to use conditional for extra protection

```ts
let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}

if (typeof a === "string") {
  let b = a.toUpperCase();
}
```

### void

- `void` is for functions that doesn't return anything
- If a function is not returning anything, it will automatically be typed as `void`

```ts
const hello = () => console.log("x");

const a = hello();
// Below will not work since function hello() is void
a.toUpperCase();
```

### never

- `never` happens when a function never returns like a function that throws exception

```ts
function hello(): never {
  throw new Error("error");
}
```

- It also happens when an argument can be of two types

```ts
function hello(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    // below will be type "never"
    name;
  }
}
```

- By the way, is TS typing, `|` is `or` and `&` is `and`

## 3.0 Call Signatures

- Call signature is the type of arguments and return value of a function
- We can make preset for the arguments and return value types and reuse it

```ts
// Create call signature
type Add = (a: number, b: number) => number;

// Add call signature after function name
const add: Add = (a, b) => a + b;
```

- Making call signatures helps you think about the types beforehand and also make them reusable

## 3.1 Overloading

- Overloading is when a function has multiple different call signatures

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
```

- When there are difference in number of arguments among the call signatures, we need to clarify the unused argument as optional

```ts
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
```

## 3.2 Polymorphism

- Polymorphism basically means multi shape
- Types such as number, string, boolean are concrete types that we are sure what they are
- Generic types are are types that can be implictly figured by TS
- Generic is like a placeholder for types
- If we don't know the type in advance, we use generic as placeholder
- It is written in front of the type and often written as `<T>`

```ts
type SuperPrint = <T>(arr: T[]) => T;

const superPrint: SuperPrint = (arr) => arr[0];

// T = number
const a = superPrint([1, 3, 4, 5]);
// T = boolean
const b = superPrint([true, false, true]);
// T = string
const c = superPrint(["a", "b", "c"]);
// T = string | number | boolean
const d = superPrint(["a", 1, true]);
```

## 3.3 Generics Recap

- By using generics, we let TS guess and create the call signature
- It is similar to using any but it still provides us the protection of TS
- You can also add multiple generics

```ts
type SuperPrint = <T, V>(a: T[], b: M) => T;
```

## 3.4 Conclusions

```ts
function superPrint<V>(a: V[]) {
  return a[0];
}
```

```ts
type Player<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};

type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};
```

```ts
type A = Array<number>;

let a: A = [1, 2, 3, 4];
```

## 4.0 Classes

### Object Oriented Programming

- We often code multiple objects with same properties
- In order to create the blueprint for these objects which can be reused and easy to mutate, we use Class
- Class is basically the cookie cutter or blueprint for repeating objects

### Class in TS

```ts
abstract class User {
  // constructor
  constructor(
    private firstsName: string,
    public lastName: string,
    protected nickname: string
  );
  // abstarct method
  abstract getNickName(): void;
  // method
  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const como = new Player("como", "kim", "꼬모");
```

- Abstract classes are classes that other classes can inherit from but cannot have instance of its own directly
- Abstract method only takes call signatrue and it should be implemented by all inherited classes
- Properties can be either private, public or protected

## 4.1 Recap

- When creating classes in TS, in constructor, we just need to specify protection level, name the property, and specify type
- Abstract classes cannot create instances of its own but can be used for extend

```ts
type Words = {
  // [key:string] here means there can be unlimited amount of items
  [key: string]: string;
};

class Dict {
  // class property can be manually initialized
  private words: Words;
  constructor() {
    this.words = {};
  }
  // Class can be used as a type(Word)
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");
```

## 4.2 Interfaces

- You can also constraint values using type

```ts
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player = {
  nickname: string;
  team: Team;
  health: Health;
};

const como: Player = {
  nickname: "como",
  // can only choose from Team
  team: "yellow",
  // can only choose from Health
  health: 5,
};
```

- Another way to experience shape of data is using interface
- Interface is used to shape an object
- `type` is more versatile than `interface` since `interface` only used for shaping object
- However, `interface` is much easier to extend from
- `interface` is also accumulative that even if you create multiple `interface`s with same name, they will act as one

```ts
interface User {
  readonly name: string;
}

interface Player extends User {}

const como: Player = {
  name: "como",
};
```

## 4.3 Interfaces part Two

```ts
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
```

- In above, `abstract class User` will end up in JS when compiled as normal `class`
- In order to make it disappear, we could replace it with an interface
- Below will make your JS code much more light while accomplishing the same as above
- The only drawback is that the properties must be public

```ts
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
```

- Interface can also be used as a type
