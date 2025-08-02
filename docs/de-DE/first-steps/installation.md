---
prev:
   text: 'Erste Schritte - Einführung'
   link: '/de-DE/first-steps/intro'
next: 
   text: 'Benutzung - FTP-Integration'
   link: '/de-DE/usage/ftp-integration'
---

# Installation

SkEditor ist einfach auf verschiedenen Plattformen zu installieren. Folge den Anweisungen für Dein Betriebssystem.

## Voraussetzungen

Stelle sicher, dass Du das .NET 8.0 Runtime auf Deinem System installiert hast, bevor Du SkEditor installierst. Du kannst es von der [.NET-Downloadseite](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) herunterladen.

## Windows

SkEditor bietet drei Installationsmethoden für Windows-Benutzer:

### Methode 1: Installer (Empfohlen)

1. Gehe zur [Releases-Seite](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Lade `SkEditorInstaller.msi` herunter
3. Führe den Installer aus und folge den Anweisungen
4. SkEditor wird standardmäßig in `C:\Program Files\SkEditor` installiert und erstellt eine Verknüpfung auf dem Desktop

### Methode 2: Windows Package Manager (winget)

Für Benutzer mit winget installiertem (standardmäßig auf Windows 11 und mit neueren Windows 10-Versionen vorinstalliert):

```bash
winget install Notro.SkEditor
```

### Methode 3: Portable Version

1. Lade die entsprechende `.zip`-Datei von der [Releases-Seite](https://github.com/SkEditorTeam/SkEditor/releases/latest) herunter
2. Entpacke sie in ein Verzeichnis Deiner Wahl
3. Führe `SkEditor.exe` direkt aus

::: info Hinweis zur Portable Version
Obwohl es sich um eine "portable" Version handelt, benötigt diese Version dennoch die .NET Runtime und erstellt Dateien in `%AppData%`.
:::

::: tip ARM64 Geräte
ARM64-Benutzer müssen die portable ARM64-Version verwenden, da die Installer- und Winget-Versionen nur für x64 sind.
:::

## Linux

Linux-Benutzer können SkEditor mit der portablen Version nutzen:

1. Lade die Linux `.zip`-Datei von der [Releases-Seite](https://github.com/SkEditorTeam/SkEditor/releases/latest) herunter
2. Entpacke sie in ein Verzeichnis Deiner Wahl
3. Setze die Ausführungsberechtigungen:

   ```bash
   chmod +x SkEditor
   ```

4. Führe die Anwendung aus:

::: details Zukünftige Linux-Unterstützung
Ich arbeite derzeit daran, SkEditor als Flatpak zu veröffentlichen, was die Installation auf Linux-Systemen erleichtern würde. Auch wenn es momentan nicht meine oberste Priorität hat, hoffe ich, es in Zukunft bereit zu haben. Wenn Du daran interessiert bist, dabei zu helfen, kontaktiere mich bitte auf Discord!
:::

## macOS

Die Installation von SkEditor auf macOS ist aufgrund der Sicherheitsrichtlinien von Apple etwas komplizierter. Folge diesen Schritten:

1. Bestimme, ob Du einen Intel- oder Apple-Silicon-Mac hast:
   - Für Intel-Macs lade die x64-Version herunter.
   - Für Apple-Silicon-Macs lade die ARM64-Version herunter.
   - Wenn Du Dir nicht sicher bist, kannst Du die Architektur Deines Macs überprüfen, indem Du im Apple-Menü auf "Über diesen Mac" gehst.
2. Lade die entsprechende `.zip`-Datei von der [Releases-Seite](https://github.com/SkEditorTeam/SkEditor/releases/latest) herunter
3. Entpacke die Inhalte der `.zip`-Datei. Du solltest jetzt das SkEditor.app-Paket haben.
4. Öffne ein Terminalfenster und navigiere zu dem Verzeichnis, in das Du SkEditor entpackt hast.
5. Führe den folgenden Befehl aus, um das Ausführen von SkEditor zu erlauben:

   ```bash
   xattr -d com.apple.quarantine SkEditor.app
   ```

6. Es sollte jetzt einwandfrei funktionieren!

::: details Warum der Terminal-Befehl?
Du fragst Dich vielleicht, warum Du einen merkwürdigen Befehl im Terminal ausführen musst. Das liegt an den Sicherheitsrichtlinien von macOS, die verhindern, dass aus dem Internet heruntergeladene Apps ohne ausdrückliche Genehmigung ausgeführt werden. Der Befehl entfernt das Quarantäne-Attribut, sodass SkEditor ohne Probleme ausgeführt werden kann.

Ich kann keine benutzerfreundlichere Lösung anbieten - das würde erfordern, Apple für ein Entwicklerzertifikat zu bezahlen.
:::
