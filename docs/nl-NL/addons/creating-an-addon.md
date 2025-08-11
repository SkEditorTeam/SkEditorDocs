---
prev:
   text: 'Add-ons - Analyzer'
   link: '/addons/analyzer'
next: 
   text: 'Geavanceerd - Compileren'
   link: '/advanced/compiling'
---

# Een add-on maken

Wil je de functionaliteit van SkEditor uitbreiden? Een add-on maken is een geweldige manier! Deze gids helpt je stap voor stap bij het bouwen van je eigen add-on voor SkEditor.

::: warning
Deze gids gaat ervan uit dat je basiskennis hebt van C# en .NET-ontwikkeling.
Als je nieuw bent met C#, bekijk dan eerst enkele inleidende bronnen.
:::

## Vereisten

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- Een code-editor of IDE die C# ondersteunt (bijv. Visual Studio, Rider of Visual Studio Code)

Een project maken kan in een teksteditor, maar een IDE maakt het proces aanzienlijk makkelijker.

In deze gids gebruiken we JetBrains Rider. Het proces is vergelijkbaar in Visual Studio; VS Code werkt minder prettig voor dit doel.

## Een add-onproject aanmaken

1. Maak een nieuw project: open je IDE en maak een Class Library-project voor .NET 8.0. Kies een naam.
2. Voeg de SkEditor API toe: voeg het [SkEditor NuGet-pakket](https://www.nuget.org/packages/SkEditor/) toe via je projectbestand of via de NuGet Package Manager.

## De add-on implementeren

Je IDE genereert doorgaans een klasse met de projectnaam. Dit wordt je add-on entrypoint.
Implementeer eerst de interface `IAddon` uit de SkEditor API. Deze vereist een aantal properties en methodes.

Een eenvoudig voorbeeld:

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

## De add-on gebruiken

1. Build het project: bouw je project om de DLL te genereren. In je IDE kun je `Build` of `Pack` kiezen. Via commandline kan ook:

    ```bash
    dotnet build -c Release
    ```

2. Vind de DLL: na het bouwen staat deze in `/bin/Release/net8.0`, met je projectnaam (bijv. `SkEditorTestAddon.dll`).
3. Installeer de add-on: kopieer de DLL naar een map in de SkEditor-add-onsmap: `%appdata%/SkEditor/Addons` (Windows), `~/.config/SkEditor/Addons` (Linux), `~/Library/Application Support/SkEditor/Addons` (macOS).
   Maak bijvoorbeeld een map `TestAddon` en plaats de DLL erin. Je kunt ook `Ontwikkelaarsmodus` inschakelen in de SkEditor-instellingen (sectie `Over`) en vervolgens de knop `Load from file` in de sectie `Add-ons` gebruiken om direct te laden.
4. Herstart SkEditor: na het plaatsen van de DLL laadt SkEditor je add-on. Dit is niet nodig als je `Load from file` gebruikte.
5. Klaar! Vragen of hulp nodig? Stel ze in de SkEditor Discord (`#dev`).
