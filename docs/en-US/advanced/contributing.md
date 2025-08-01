---
prev:
   text: 'Extensions - Creating an Addon'
   link: '/en-US/addons/creating-an-addon'
next: 
   text: 'Advanced - Compiling'
   link: '/en-US/advanced/compiling'
---

# Contributing

Do you want to contribute to this project? Awesome! Here are some guidelines to help you get started.

## Code rules

### General rules

- Some rules should be enforced automatically by the `.editorconfig` file
- Follow the Microsoft C# coding conventions - especially regarding naming conventions!
- Use spaces instead of tabs
- Use `var` only when the type is obvious from the right side of the assignment
- The `Class class = new();` syntax is preferred over `new Class()` or `var class = new Class()`
- Please use the new `list = [];` syntax
- Don't overuse comments - the code should be self-explanatory
- Opening curly braces should always be on a NEW line

### Naming conventions

- Classes, interfaces, enums, methods and properties should be named using `PascalCase`
- Interfaces should be prefixed with `I` (e.g. `IExampleInterface`)
- Local variables and parameters should be named using `camelCase`
- Private class fields should be named using `_camelCase`
- Constants should be named using `PascalCase`
  
::: tip
But... you know what? The most important rule is: **just don't make complete garbage!**

IDEs can apply most of these things automatically. So, don't worry too much about it!
:::

## Pull requests

You should base your work on the `dev/dev` branch instead of the `main` branch. The `main` branch is reserved for stable releases, while the `dev` branch is where all the development happens.

## Bug fixes

Bug fixes are always welcome and appreciated, so please don't hesitate to submit a pull request if you find a bug in the code!

## Features

Features are a bit trickier. If you want to implement a new feature, it would be best to ask first on Discord - either privately (by messaging Notro) or in the Discord server.
This way, we can discuss the feature first. I wouldn't want your work to go to waste!
