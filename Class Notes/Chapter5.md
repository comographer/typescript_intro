## 5.1 Targets

- It is very unlikely that a developer will manually setup TS dev environment
- Usually we will be using libraries that will configure that for us
- When we do need to set it up, do as below.

```cli
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
