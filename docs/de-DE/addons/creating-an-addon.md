---
prev:
   text: 'Erweiterungen - Analyzer'
   link: '/de-DE/addons/analyzer'
next: 
   text: 'Mitwirken - Übersicht'
   link: '/de-DE/contributing/overview'
---

# Eine Erweiterung erstellen

Soll die Funktionalität von SkEditor erweitert werden? Das Erstellen einer Erweiterung ist ein guter Weg dafür! Diese Anleitung führt durch den Prozess der Erstellung einer eigenen Erweiterung für SkEditor.

::: warning
Diese Anleitung setzt grundlegende Kenntnisse in C# und .NET-Entwicklung voraus.
Bei Neueinsteigern in C# sollten zunächst einführende Ressourcen betrachtet werden.
:::

## Voraussetzungen

- [.NET 8.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- Ein Code-Editor oder eine IDE, die C#-Entwicklung unterstützt (z.B. Visual Studio, Rider oder Visual Studio Code)

Das Erstellen eines Projekts in einem Texteditor ist möglich, aber die Verwendung einer IDE macht den Prozess viel einfacher und effizienter.

Diese Anleitung verwendet JetBrains Rider als IDE. Der Prozess sollte in Visual Studio ähnlich sein, aber VS Code funktioniert nicht so gut.

## Ein Erweiterungs-Projekt erstellen

1. **Ein neues Projekt erstellen**: Die IDE öffnen und ein neues Class Library-Projekt erstellen, das auf .NET 8.0 abzielt. Einen beliebigen Namen wählen.
2. **SkEditor API hinzufügen**: Eine Referenz zur SkEditor API hinzufügen. Dies kann durch Hinzufügen des [SkEditor NuGet-Pakets](https://www.nuget.org/packages/SkEditor/) in der Projektdatei oder über den NuGet Package Manager in der IDE erfolgen.

## Die Erweiterung implementieren

Es sollte eine Klasse mit dem Projektnamen geben, die von der IDE generiert wurde. Diese Klasse wird der Einstiegspunkt der Erweiterung sein.
Zunächst muss die `IAddon`-Schnittstelle aus der SkEditor API implementiert werden. Diese Schnittstelle erfordert die Implementierung einiger Eigenschaften und Methoden.

Hier ist ein einfaches Beispiel, wie die Erweiterungsklasse aussehen könnte:

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

## Die Erweiterung verwenden

1. **Das Projekt erstellen**: Nach der Implementierung der Erweiterung das Projekt erstellen, um die DLL-Datei zu generieren.
   Das Projekt in der IDE mit der rechten Maustaste anklicken und `Build` oder `Pack` auswählen. Alternativ kann die Befehlszeile verwendet werden:

    ```bash
    dotnet build -c Release
    ```

2. **Die DLL finden**: Nach dem Erstellen die generierte DLL-Datei finden. Sie sollte sich in einem Verzeichnis wie `/bin/Release/net8.0` befinden und nach dem Projekt benannt sein (z.B. `SkEditorTestAddon.dll`).
3. **Die Erweiterung installieren**: Die DLL-Datei in einen Ordner im SkEditor-Erweiterungsverzeichnis kopieren, das sich unter `%appdata%/SkEditor/Addons` auf Windows oder `~/.skeditor/Addons` auf Linux und macOS befindet.
   Zum Beispiel kann ein Ordner namens `TestAddon` erstellt und die DLL darin platziert werden. Alternativ kann der `Entwicklermodus` in den SkEditor-Einstellungen (Abschnitt `Über`) aktiviert und dann der `Aus Datei laden`-Button im Abschnitt `Erweiterungen` verwendet werden, um die Erweiterung direkt aus der DLL-Datei zu laden.
4. **SkEditor neu starten**: Nach dem Platzieren der DLL im Erweiterungsverzeichnis SkEditor neu starten, um die Erweiterung zu laden. Dies sollte nicht notwendig sein, wenn der `Aus Datei laden`-Button verwendet wurde.
5. **Fertig!** Bei Fragen oder wenn Hilfe benötigt wird, gerne im SkEditor Discord-Server fragen - es gibt einen speziellen `#dev`-Kanal, wo dieses Thema diskutiert werden kann!
