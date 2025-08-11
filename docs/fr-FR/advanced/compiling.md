---
prev:
   text: 'Extensions - Créer une extension'
   link: '/addons/creating-an-addon'
next:
   text: 'Avancé - Contribuer'
   link: '/advanced/contributing'
---

# Compilation

Vous pourriez vouloir compiler SkEditor vous-même, par exemple pour tester de nouvelles fonctionnalités depuis une branche `dev`.
Avec .NET, c’est assez simple et faisable en quelques étapes.

## Prérequis

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Git](https://git-scm.com/downloads)

## Cloner le dépôt

Clonez le dépôt avec :

```bash
git clone -b dev/dev https://github.com/SkEditorTeam/SkEditor.git
```

Cela clone la branche `dev/dev`. Pour une autre branche, remplacez `dev/dev` ou omettez `-b` pour `main`.

## Aller dans le dossier projet

Le dépôt contient deux projets: `SkEditor` et `Installer`. Allez dans le dossier `SkEditor` pour compiler :

```bash
cd SkEditor
```

## Compiler le projet

Lancez l’app avec :

```bash
dotnet run
```

Publiez avec :

```bash
dotnet publish
```

La sortie sera dans `bin/Release/net8.0` (le chemin exact est indiqué dans la sortie de commande).

Pour un build propre et efficace :

```bash
dotnet publish -c Release -r win-x64 --no-self-contained -p:PublishSingleFile=true -p:PublishReadyToRun=true
```

Ce que fait cette commande :

- Compilation en mode `Release`
- Cible `win-x64` (changez si besoin : `linux-x64`, `osx-x64`, etc.)
- N’inclut pas le runtime .NET (l’utilisateur doit avoir .NET 8.0)
- Publie en fichier unique (un exécutable + quelques DLL nécessaires)
- Active R2R pour améliorer le démarrage

Ajustez selon vos besoins. Consultez la [documentation officielle](https://learn.microsoft.com/dotnet/core/tools/dotnet-publish) pour plus d’options.
