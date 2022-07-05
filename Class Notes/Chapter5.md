## 5.1 Targets

- It is very unlikely that a developer will manually setup TS dev environment
- Usually we will be using libraries that will configure that for us
- When we do need to set it up, do as below.

```jsx
npm init
npm i -D typescript
touch tsconfig.json
```

- From `package.json`, delete `"main"` and content within `"scripts"`

```json
  "scripts": {
    "build": "tsc"
  },
```

- From `tsconfig.json`, add below

```json
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    "target": "ES6"
  }
}
```

- In order to compile TS to JS, run below code on CLI

```cli
npm run build
```

## 5.2 Lib Configuration

- Lib configuration is configuring on which environment your code will be running
- If you set as below, TS will understand that this code will run on ES6 and browser

```json
{
  "lib": ["ES6", "DOM"]
}
```

## 5.3 Declaration Files

- Because JS libraries are built for JS, when using them in TS, we need to explain to TS what is the shape of those libraries
- Most of the time, we will be using packages and libraries built for JS so this process is essential
- File that explaines to TS all the types for certain API is called a declaration file that uses extension `.d.ts`
- In `.d.ts` files, we can only write the call signatures
- This really shows that everything in TS should be typed

## 5.4 JSDoc

- In case you don't want to create a declaration file, you can also add to `tsconfig.json` below line

```json
"allowJs": true
```

- This will enable TS to guess the types instead of reading them from a declaration file

- In case you want TS protection on JS files, we can also do that
- You add `// @ts-check` on top and below, use comments like below

```js
// @ts-check
/**
 * Intializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */

export function exit(code) {
  return code + 1;
}
```

## 5.5 Blocks

- In order to work more efficiently, we can use npm package `ts-node`
- `ts-node` helps you to run TS without build during development
