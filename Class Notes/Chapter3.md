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
