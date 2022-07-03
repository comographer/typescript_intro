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

## 4.4 Recap

- To declare type, we can use either `type` or `interface`

```ts
type PlayerA = {
  name: string;
};
// How to extend `type`
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerA: PlayerAA = {
  name: "como",
  lastName: "kim",
};
/////
interface PlayerB {
  name: string;
}
// How to extend `interface`
interface PlayerB {
  lastName: string;
}
const playerB: PlayerB = {
  name: "como",
  lastName: "kim",
};
```

- Both types created by either by `type` or `interface` can be later implemented to a `class`
- This means these can replace an abstract class

```ts
type PlayerA = {
  firstName: string;
};
interface PlayerB {
  firstName: string;
}
class User implements PlayerB {
  constructor(public firstName: string) {}
}
```

- When you want to explain to TS shape of an object, use `interface` and for other things, use `type`

## 4.5 Polymorphism

- Polymorphsim is how we can write code that take different shapes by using generics
- Generics are placeholders for types making is reusable

```ts
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("foo");
stringsStorage.set("hello", "how are you");

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get("fow");
booleanStorage.set("hello", true);
```
