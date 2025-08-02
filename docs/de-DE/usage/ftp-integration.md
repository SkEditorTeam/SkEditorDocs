---
prev:
   text: 'Erste Schritte - Installation'
   link: '/de-DE/first-steps/installation'
next: 
   text: 'Benutzung - Experimente'
   link: '/de-DE/usage/experiments'
---

# FTP Integration

Es gibt keinen eingebauten FTP/SFTP-Explorer in der aktuellen Version der App.
SkEditor kann jedoch mit einem FTP-Client verwenden, um Dateien auf einem Server nahezu nahtlos zu bearbeiten.

## WinSCP

WinSCP ist ein beliebter FTP-Client für Windows, der einfach zu verwenden ist und viele Protokolle unterstützt.
Du kannst WinSCP [hier](https://winscp.net/eng/download.php) herunterladen.

### WinSCP für die Verwendung mit SkEditor einrichten

1. Starte WinSCP
2. Klicke im oberen Menü auf `Einstellungen` und wähle `Einstellungen` ein zweites Mal.
3. Wähle im Einstellungsfenster `Editoren` aus der linken Seitenleiste
4. Klicke auf die Schaltfläche `Hinzufügen`
5. Wähle "Externer Editor"
6. Gib im Textfeld unten den Pfad zur SkEditor-Anwendungsdatei ein (oder verwende die Schaltfläche `Auswählen`, um diese zu finden)
    - Wenn du SkEditor am Standardort installiert hast, sollte es etwa so aussehen: `C:\Program Files\SkEditor\SkEditor.exe`
7. Gib im Abschnitt "Editor-Autoauswahl" die Dateitypen an, die du mit SkEditor öffnen möchtest
    - Um beispielsweise nur Skript- und YAML-Dateien zu öffnen, kannst du `*.sk,*.yml` eingeben
    - Du kannst auch `*.*` verwenden, um alle Dateien mit SkEditor zu öffnen
8. Klicke auf `OK`, um die Einstellungen zu speichern
9. Wähle `SkEditor` aus der Liste der Editoren und verschiebe ihn an die Spitze der Liste, um sicherzustellen, dass diese Regeln durchgesetzt werden

### SkEditor mit WinSCP verwenden

1. Verbinde dich mit deinem Server über WinSCP
2. Öffne die Datei, die du bearbeiten möchtest, durch Doppelklick oder durch Auswählen und Klick auf die Schaltfläche `Bearbeiten`
3. SkEditor wird mit der ausgewählten Datei gestartet
4. Nimm deine Änderungen in SkEditor vor
5. Speichere die Datei in SkEditor (Strg + S oder Datei > Speichern)
6. WinSCP erkennt automatisch die Änderungen und lädt die geänderte Datei zurück auf den Server hoch
7. Fertig! Du kannst nun weitere Dateien bearbeiten oder WinSCP schließen.
