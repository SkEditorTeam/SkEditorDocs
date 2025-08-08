---
prev:
   text: 'Erweiterungen - Analyzer'
   link: '/de-DE/addons/analyzer'
next: 
   text: 'Fortgeschritten - Kompilieren'
   link: '/de-DE/advanced/compiling'
---

# Eine Erweiterung erstellen

Möchtest du die Funktionalität von SkEditor erweitern? Eine Erweiterung zu erstellen ist eine großartige Möglichkeit, dies zu tun! Diese Anleitung führt dich durch den Prozess der Erstellung deiner eigenen Erweiterung für SkEditor.

::: warning
Diese Anleitung setzt voraus, dass du ein grundlegendes Verständnis von C# und .NET-Entwicklung hast.
Wenn du neu in C# bist, solltest du dir zuerst einige Einführungsmaterialien ansehen.
:::

## Voraussetzungen

- [.NET 8.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- Ein Code-Editor oder eine IDE, die die C#-Entwicklung unterstützt (z.B. Visual Studio, Rider oder Visual Studio Code)

Die Erstellung eines Projekts in einem Texteditor ist möglich, aber die Verwendung einer IDE macht den Prozess viel einfacher und effizienter.

Diese Anleitung verwendet JetBrains Rider als IDE. Der Prozess sollte in Visual Studio ähnlich sein, aber VS Code wird nicht so gut funktionieren.

## Erstellen eines Erweiterungsprojekts

1. **Neues Projekt erstellen**: Öffne deine IDE und erstelle ein neues Klassenbibliotheksprojekt, das .NET 8.0 nutzt. Nenne es, wie du möchtest.
2. **SkEditor API hinzufügen**: Füge eine Referenz zur SkEditor API hinzu. Du kannst dies tun, indem du das [SkEditor NuGet-Paket](https://www.nuget.org/packages/SkEditor/) in deiner Projektdatei oder über den NuGet-Paket-Manager in deiner IDE hinzufügst.

## Implementierung der Erweiterung

Du solltest eine Klasse mit dem von der IDE generierten Projektnamen haben. Diese Klasse wird dein Einstiegspunkt für die Erweiterung sein.
Zuerst musst du das `IAddon`-Interface aus der SkEditor API implementieren. Dieses Interface erfordert, dass du einige Eigenschaften und Methoden implementierst.

Hier ist ein einfaches Beispiel, wie deine Erweiterungsklasse aussehen könnte:

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

## Verwendung der Erweiterung

1. **Projekt erstellen**: Nachdem du deine Erweiterung implementiert hast, erstelle das Projekt, um die DLL-Datei zu generieren.
   Du kannst mit der rechten Maustaste auf das Projekt in deiner IDE klicken und `Build` oder `Pack` auswählen. Du kannst auch die Befehlszeile verwenden:

    ```bash
    dotnet build -c Release
    ```

2. **DLL finden**: Nach dem Erstellen, lokalisiere die generierte DLL-Datei. Sie sollte sich in einem Verzeichnis wie `/bin/Release/net8.0` befinden und nach deinem Projekt benannt sein (z.B. `SkEditorTestAddon.dll`).
3. **Erweiterung installieren**: Kopiere die DLL-Datei in einen Ordner im SkEditor-Erweiterungsverzeichnis, das sich unter `%appdata%/SkEditor/Addons` auf Windows, `~/.config/SkEditor/Addons` auf Linux oder `~/Library/Application Support/SkEditor/Addons` auf macOS befindet.
   Du kannst beispielsweise einen Ordner namens `TestAddon` erstellen und die DLL dort ablegen. Du kannst auch den `Entwicklermodus` in den SkEditor-Einstellungen (Bereich `Über`) aktivieren und dann die Schaltfläche `Von Datei laden` im Bereich `Erweiterungen` verwenden, um deine Erweiterung direkt von der DLL-Datei zu laden.
4. **SkEditor neu starten**: Nachdem du die DLL im Erweiterungsverzeichnis platziert hast, starte SkEditor neu, um deine Erweiterung zu laden. Dies sollte nicht notwendig sein, wenn du die Schaltfläche `Von Datei laden` verwendet hast.
5. **Viel Spaß!** Wenn du Fragen hast oder Hilfe benötigst, kannst du dich gerne im SkEditor Discord-Server melden - es gibt einen speziellen `#dev`-Kanal, in dem du dieses Thema besprechen kannst!
