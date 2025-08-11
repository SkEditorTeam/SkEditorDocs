---
prev:
   text: 'Eerste stappen - Introductie'
   link: '/first-steps/intro'
next: 
   text: 'Gebruik - FTP-integratie'
   link: '/usage/ftp-integration'
---

# Installatie

SkEditor is eenvoudig te installeren op verschillende platformen. Volg de stappen voor jouw besturingssysteem.

## Vereisten

Zorg dat de .NET 8.0 Runtime is geïnstalleerd. Download via de [.NET downloadpagina](https://dotnet.microsoft.com/download/dotnet/8.0).

## Windows

SkEditor biedt drie installatiemethoden op Windows:

### Methode 1: Installer (aanbevolen)

1. Ga naar de [Releases-pagina](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Download `SkEditorInstaller.msi`
3. Voer de installer uit en volg de stappen
4. Standaard wordt SkEditor geïnstalleerd in `C:\Program Files\SkEditor` en er wordt een bureaubladkoppeling gemaakt

### Methode 2: Windows Package Manager (winget)

Als je winget hebt (standaard op Windows 11 en recente Windows 10-versies):

```bash
winget install Notro.SkEditor
```

### Methode 3: Portable versie

1. Download het juiste `.zip`-bestand van de [Releases-pagina](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Pak het uit in een gewenste map
3. Start `SkEditor.exe`

::: info Opmerking over portable
Ondanks "portable" zijn .NET Runtime en bestanden in `%AppData%` nog steeds nodig.
:::

::: tip ARM64-apparaten
ARM64-gebruikers moeten de portable ARM64-versie gebruiken; installer en winget zijn alleen x64.
:::

## Linux

Gebruik de portable versie:

1. Download de Linux-`.zip` van de [Releases-pagina](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Pak uit
3. Maak uitvoerbaar:

   ```bash
   chmod +x SkEditor
   ```

4. Start de applicatie

::: details Toekomstige Linux-ondersteuning
We onderzoeken publicatie als Flatpak om installatie te vereenvoudigen. Hulp welkom – meld je op Discord!
:::

## macOS

Installatie op macOS is iets ingewikkelder vanwege Apple-beveiliging:

1. Bepaal of je een Intel- of Apple Silicon-Mac hebt:
   - Intel: download x64-versie
   - Apple Silicon: download ARM64-versie
   - Onzeker? Controleer dit via "Over deze Mac" in het Apple-menu
2. Download de juiste `.zip` van de [Releases-pagina](https://github.com/SkEditorTeam/SkEditor/releases/latest)
3. Pak uit; je krijgt SkEditor.app
4. Open een terminal en ga naar de map met SkEditor
5. Voer uit om uitvoeren toe te staan:

   ```bash
   xattr -d com.apple.quarantine SkEditor.app
   ```

6. Klaar!

::: details Waarom deze terminalopdracht?
macOS markeert internetdownloads als "quarantaine". De opdracht verwijdert dat attribuut zodat SkEditor kan starten. Een gebruiksvriendelijker oplossing vereist een betaalde Apple-ontwikkelaarscertificaat.
:::
