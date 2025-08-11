---
prev:
   text: 'Geavanceerd - Compileren'
   link: '/advanced/compiling'
next: false
---

# Bijdragen

Wil je aan dit project bijdragen? Top! Hier zijn enkele richtlijnen om je op weg te helpen.

## Coderegels

### Algemene regels

- Sommige regels worden automatisch afgedwongen via `.editorconfig`
- Volg Microsofts C#-conventies, vooral qua naamgeving
- Gebruik spaties in plaats van tabs
- Gebruik `var` alleen als het type duidelijk is vanaf de rechterkant van de toewijzing
- De syntax `Class c = new();` heeft de voorkeur boven `new Class()` of `var c = new Class()`
- Gebruik bij voorkeur de nieuwe `list = [];`-syntax
- Overdrijf niet met comments – de code moet zichzelf verklaren
- Openende accolades altijd op een nieuwe regel

### Naamgevingsconventies

- Klassen, interfaces, enums, methoden en properties: `PascalCase`
- Interfaces met prefix `I` (bijv. `IExampleInterface`)
- Lokale variabelen en parameters: `camelCase`
- Private velden: `_camelCase`
- Constanten: `PascalCase`
  
::: tip
Belangrijkste regel: maak er geen complete puinhoop van.
IDE's kunnen de meeste dingen automatisch toepassen, dus maak je niet te druk.
:::

## Pull requests

Baseer je werk op de branch `dev/dev` en niet op `main`. `main` is voor stabiele releases; `dev` is voor ontwikkeling.

## Bugfixes

Bugfixes zijn altijd welkom. Dien gerust een pull request in als je een bug vindt!

## Features

Features zijn lastiger. Wil je een nieuwe feature bouwen, overleg dan eerst op Discord (privé met Notro of in `#dev`).
Zo voorkomen we dubbel werk of teleurstelling.
