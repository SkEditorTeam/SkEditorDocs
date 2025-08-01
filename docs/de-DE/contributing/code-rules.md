---
prev:
   text: 'Mitwirken - Kompilieren'
   link: '/de-DE/contributing/compiling'
next: false
---

# Code rules

## General rules

- Some rules should be enforced automatically by the `.editorconfig` file
- Follow the Microsoft C# coding conventions - especially regarding naming conventions!
- Use spaces instead of tabs
- Use `var` only when the type is obvious from the right side of the assignment
- The `Class class = new();` syntax is preferred over `new Class()` or `var class = new Class()`
- Please use the new `list = [];` syntax
- Don't overuse comments - the code should be self-explanatory
- Opening curly braces should always be on a NEW line

## Naming conventions

- Classes, interfaces, enums, methods and properties should be named using `PascalCase`
- Interfaces should be prefixed with `I` (e.g. `IExampleInterface`)
- Local variables and parameters should be named using `camelCase`
- Private class fields should be named using `_camelCase`
- Constants should be named using `PascalCase`
  
::: tip
But... you know what? The most important rule is: **just don't make complete garbage!**

IDEs can apply most of these things automatically. So, don't worry too much about it!
:::
