---
prev:
   text: 'Avancé - Compilation'
   link: '/advanced/compiling'
next: false
---

# Contribuer

Vous souhaitez contribuer à ce projet ? Super ! Voici quelques règles pour démarrer.

## Règles de code

### Règles générales

- Certaines règles sont appliquées automatiquement via `.editorconfig`
- Suivez les conventions de codage C# de Microsoft, notamment pour le nommage
- Utilisez des espaces, pas des tabulations
- Utilisez `var` seulement lorsque le type est évident à droite de l’affectation
- Préférez `Class class = new();` à `new Class()` ou `var class = new Class()`
- Utilisez la nouvelle syntaxe `list = [];`
- Évitez la surabondance de commentaires — le code doit rester parlant
- Les accolades ouvrantes doivent toujours être sur UNE nouvelle ligne

### Conventions de nommage

- Classes, interfaces, enums, méthodes et propriétés en `PascalCase`
- Interfaces préfixées par `I` (ex: `IExampleInterface`)
- Variables locales et paramètres en `camelCase`
- Champs privés de classe en `_camelCase`
- Constantes en `PascalCase`
  
::: tip
La règle la plus importante: ne faites pas de gros bazar. Les IDE appliquent déjà beaucoup de conventions automatiquement, pas de panique.
:::

## Pull requests

Basez votre travail sur la branche `dev/dev` plutôt que `main`. `main` est réservé aux versions stables; le développement se fait sur `dev`.

## Corrections de bugs

Elles sont toujours bienvenues — n’hésitez pas à ouvrir une PR si vous corrigez un bug.

## Fonctionnalités

Pour les nouvelles fonctionnalités, il vaut mieux en discuter d’abord sur Discord — en DM (Notro) ou sur le serveur (salon `#dev`).
Ainsi, on évite le travail inutile.
