---
prev:
   text: 'Erweiterungen - Eine Erweiterung erstellen'
   link: '/de-DE/addons/creating-an-addon'
next: 
   text: 'Fortgeschritten - Kompilieren'
   link: '/de-DE/advanced/compiling'
---


# Mitwirken

Möchtest du zu diesem Projekt beitragen? Großartig! Hier sind einige Richtlinien, die dir den Einstieg erleichtern.

## Code Regeln

### Allgemeine Regeln

- Einige Regeln sollten automatisch durch die `.editorconfig`-Datei durchgesetzt werden
- Befolge die Microsoft C#-Codierungsrichtlinien - insbesondere hinsichtlich der Namenskonventionen!
- Benutze Leerzeichen statt Tabs
- Benutze `var` nur, wenn der Typ anhand der rechten Seite der Zuweisung offensichtlich ist
- Der `Class class = new();`-Syntax wird der `new Class()`- oder `var class = new Class()`-Syntax vorgezogen
- Bitte benutze den neuen `list = [];`-Syntax
- Überbenutze Kommentare nicht - der Code sollte selbsterklärend sein
- Öffnende geschweifte Klammern sollten immer in einer NEUEN Zeile stehen

### Namenskonventionen

- Klassen, Interfaces, Enums, Methoden und Eigenschaften sollten mit `PascalCase` benannt werden
- Interfaces sollten mit `I` (z.B. `IExampleInterface`) vorangestellt werden
- Lokale Variablen und Parameter sollten mit `camelCase` benannt werden
- Private Klassenfelder sollten mit `_camelCase` benannt werden
- Konstanten sollten mit `PascalCase` benannt werden

::: tip
Aber... weißt du was? Die wichtigste Regel ist: **Mach einfach keinen kompletten Müll!**

IDEs können die meisten dieser Dinge automatisch anwenden. Mach dir also nicht zu viele Gedanken darüber!
:::

## Pull requests

Du solltest deine Arbeit auf dem `dev/dev`-Branch anstatt auf dem `main`-Branch basieren. Der `main`-Branch ist für stabile Releases reserviert, während der `dev`-Branch der Ort ist, an dem die gesamte Entwicklung stattfindet.

## Fehlerbehebungen

Fehlerbehebungen sind immer willkommen und werden geschätzt. Zögere also nicht, eine Pull Request einzureichen, wenn du einen Fehler im Code findest!

## Funktionen

Funktionen sind etwas komplizierter. Wenn du eine neue Funktion implementieren möchtest, wäre es am besten, zuerst auf Discord zu fragen - entweder privat (indem du Notro eine Nachricht sendest) oder im Discord-Server.
Auf diese Weise können wir die Funktion zuerst besprechen. Ich möchte nicht, dass deine Arbeit umsonst ist!
