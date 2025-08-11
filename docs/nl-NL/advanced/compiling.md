---
prev:
   text: 'Add-ons - Een add-on maken'
   link: '/addons/creating-an-addon'
next:
   text: 'Geavanceerd - Bijdragen'
   link: '/advanced/contributing'
---

# Compileren

Je wilt misschien SkEditor zelf compileren, bijvoorbeeld om nieuwe features uit een `dev`-branch te testen.
In .NET is dat vrij eenvoudig en in een paar stappen gedaan.

## Vereisten

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Git](https://git-scm.com/downloads)

## Repository klonen

Kloon de repository met:

```bash
git clone -b dev/dev https://github.com/SkEditorTeam/SkEditor.git
```

Dit kloont de branch `dev/dev`. Wil je een andere branch, vervang dan `dev/dev` of laat `-b` weg voor `main`.

## Naar de projectmap gaan

De repo bevat twee projecten: `SkEditor` en `Installer`. Navigeer naar de map `SkEditor` om te compileren:

```bash
cd SkEditor
```

## Project compileren

Start de app met:

```bash
dotnet run
```

Publiceren met:

```bash
dotnet publish
```

De output komt in `bin/Release/net8.0` (het exacte pad staat in de commandoutput).

Voor een efficiënte build kun je gebruiken:

```bash
dotnet publish -c Release -r win-x64 --no-self-contained -p:PublishSingleFile=true -p:PublishReadyToRun=true
```

Dit zorgt voor:

- Build in `Release`
- Runtime `win-x64` (pas aan naar `linux-x64`, `osx-x64`, enz.)
- Zonder .NET-runtime in de output (gebruiker moet .NET 8.0 hebben)
- Single-file executable (er blijven wel enkele DLL's over)
- R2R-compilatie voor snellere start

Pas opties aan naar wens; dit is een goed startpunt.
