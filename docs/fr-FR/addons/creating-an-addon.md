---
prev:
   text: 'Extensions - Analyzer'
   link: '/addons/analyzer'
next: 
   text: 'Avancé - Compilation'
   link: '/advanced/compiling'
---

# Créer une extension

Vous souhaitez étendre les fonctionnalités de SkEditor ? Créer une extension est une excellente idée ! Ce guide vous accompagne pour créer votre propre extension pour SkEditor.

::: warning
Ce guide suppose que vous avez des bases en C# et en développement .NET.
Si vous débutez en C#, commencez par quelques ressources d’introduction.
:::

## Prérequis

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- Un éditeur/IDE supportant C# (Visual Studio, Rider, ou Visual Studio Code)

Il est possible d’utiliser un simple éditeur de texte, mais un IDE facilite grandement le processus.

Ce guide utilise JetBrains Rider. La procédure est similaire dans Visual Studio; VS Code est moins adapté.

## Créer le projet d’extension

1. Créez un nouveau projet: Bibliothèque de classes ciblant .NET 8.0. Nommez-le comme vous voulez.
2. Ajoutez l’API SkEditor: référencez le package [SkEditor NuGet](https://www.nuget.org/packages/SkEditor/) dans votre projet (via le fichier projet ou le gestionnaire de packages).

## Implémenter l’extension

Votre IDE aura généré une classe portant le nom du projet. Cette classe est le point d’entrée de votre extension.
Implémentez d’abord l’interface `IAddon` fournie par l’API SkEditor. Elle impose quelques propriétés et méthodes.

Exemple minimal:

```csharp
using SkEditor.API;

namespace SkEditorTestAddon;

public class TestAddon : IAddon
{
    public string Name => "TestAddon";

    public string Identifier => "TestAddon";

    public string Version => "1.0.0";

    public string? Description => "A test addon for SkEditor";

    public Version GetMinimalSkEditorVersion() => new(2, 9, 3);

    public void OnEnable()
    {
        SkEditorAPI.Windows.ShowMessage("Enabled!", "TestAddon enabled!");
    }
}
```

## Utiliser l’extension

1. Compilez: générez la DLL du projet.
   Dans l’IDE ou via la ligne de commande:

    ```bash
    dotnet build -c Release
    ```

2. Localisez la DLL: en général dans `/bin/Release/net8.0` et nommée d’après votre projet (ex: `SkEditorTestAddon.dll`).
3. Installez l’extension: copiez la DLL dans un dossier sous le répertoire des extensions SkEditor — `%appdata%/SkEditor/Addons` sur Windows, `~/.config/SkEditor/Addons` sur Linux, `~/Library/Application Support/SkEditor/Addons` sur macOS.
   Vous pouvez créer un dossier `TestAddon` et y placer la DLL. Vous pouvez aussi activer le `Mode développeur` dans les paramètres (section `À propos`) puis utiliser `Charger depuis un fichier` dans la section `Extensions` pour charger directement la DLL.
4. Redémarrez SkEditor: nécessaire si vous n’avez pas utilisé le chargement direct.
5. Et voilà ! Pour toute question, rejoignez le Discord de SkEditor — le salon `#dev` est prévu pour ça.
