---
prev:
   text: 'Experimente - Hex Vorschau'
   link: '/de-DE/usage/experiments/hex-preview'
next: 
   text: 'Erweiterungen - Eine Erweiterung erstellen'
   link: '/de-DE/addons/creating-an-addon'
---

# Analyzer

Der Analyzer ist ein offizielles Addon für SkEditor, das Echtzeit-Code-Analyse direkt im Editor bereitstellt. Es zeigt Fehler und Warnungen über den Skript-Code an und verwendet einen Parser, der identisch mit dem im Skript-Plugin verwendeten Parser ist.

## Voraussetzungen

Der Analyzer benötigt **Java 21** zum Ausführen. Stelle sicher, dass es auf dem System installiert ist. Falls Java 21 nicht vorhanden ist, kann es von der [Adoptium-Website](https://adoptium.net/) heruntergeladen werden. Die JRE reicht aus, aber auch das JDK funktioniert.
Bei der Installation von Java kann es zum System PATH hinzugefügt werden, was empfohlen wird. Andernfalls muss der Pfad zur Java-Executable in den Analyzer-Einstellungen angegeben werden, wie unten beschrieben.

## Installation

Die Installation des Analyzer-Addons ist unkompliziert:

1. Den Marketplace in SkEditor öffnen (Oberes Menü > Sonstiges > Marketplace)
2. Das "Analyzer" Addon finden und anklicken
3. Den `Installieren` Button klicken
4. SkEditor neu starten, wenn dazu aufgefordert
5. Möglicherweise erscheint nach dem ersten Neustart eine weitere Neustart-Benachrichtigung - das ist normal bei Erstinstallationen, also SkEditor nochmals neu starten
6. Das Addon ist jetzt einsatzbereit! Bei der ersten Verwendung oder wenn SkAnalyzer veraltet ist, wird es sich automatisch herunterladen oder aktualisieren

## Verwendung

Die Verwendung des Analyzers ist einfach und intuitiv:

Das Addon fügt einen `Analysieren` Button zur unteren Leiste von SkEditor hinzu (alternativ kann F1 als Tastenkürzel verwendet werden). Durch Klicken dieses Buttons wird die aktuell geöffnete Datei analysiert.

Nach der Analyse werden zwei Informationsanzeigen neben dem `Analysieren` Button angezeigt:

- **Fehler und Warnungen** über den Code
- **Statistiken** mit der Anzahl von Befehlen, Funktionen und Events im Skript

## Konfiguration

Das Verhalten des Analyzers kann über die SkEditor-Einstellungen angepasst werden:

1. Zu Oberes Menü > Einstellungen > Addons navigieren
2. Auf das `Analyzer` Addon klicken

### Verfügbare Einstellungen

#### Analyzer beim Start laden

- Wenn aktiviert: Der Analyzer wird automatisch geladen, wenn SkEditor startet
- Wenn deaktiviert: Der `Laden` Button in der unteren Leiste muss geklickt werden, um ihn zu aktivieren

#### Echtzeit-Analyzer

- Wenn aktiviert: Der Code wird automatisch während der Eingabe analysiert (mit kurzer Verzögerung nach dem Stoppen der Eingabe)
- Wenn deaktiviert: Der `Analysieren` Button muss jedes Mal manuell geklickt werden

#### Analyzer Java-Pfad

- **Standard**: Verwendet die Java-Executable aus dem System PATH
- **Benutzerdefiniert**: Ermöglicht das Durchsuchen und Auswählen einer spezifischen Java-Executable-Datei

## Skript Addons Unterstützung

Der Analyzer kann mit fast jedem Skript-Addon arbeiten, aber diese müssen zuerst hinzugefügt werden:

1. In den Analyzer-Einstellungen auf "Skript Addons" klicken
2. Eine Liste der aktuell geladenen Addons wird angezeigt
3. Um ein Addon hinzuzufügen, den `Hinzufügen` Button klicken und die JAR-Datei des Addons auswählen
4. Um ein Addon zu entfernen, es aus der Liste auswählen und entfernen
5. Beim Verlassen dieser Seite wird der Analyzer automatisch neu geladen.
