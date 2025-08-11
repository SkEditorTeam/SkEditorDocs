---
prev:
   text: 'Eerste stappen - Installatie'
   link: '/first-steps/installation'
next: 
   text: 'Gebruik - Experimenten'
   link: '/usage/experiments'
---

# FTP-integratie

Er is momenteel geen ingebouwde FTP/SFTP-verkenner in de app.
Je kunt SkEditor echter prima combineren met een FTP-client om bestanden op je server bijna naadloos te bewerken.

## WinSCP

WinSCP is een populaire FTP-client voor Windows die meerdere protocollen ondersteunt en eenvoudig te gebruiken is.
Download via de [WinSCP-website](https://winscp.net/eng/download.php).

### WinSCP instellen om SkEditor te gebruiken

1. Start WinSCP
2. Klik in het bovenste menu op `View` en kies `Preferences`
3. Kies links `Editors`
4. Klik op `Add`
5. Kies "External editor"
6. Voer onderin het pad naar `SkEditor.exe` in (of klik `Browse`)
    - Standaard is dit `C:\Program Files\SkEditor\SkEditor.exe`
7. Stel onder "Editor autoselection" de bestandstypen in die je met SkEditor wilt openen
    - Bijvoorbeeld `*.sk,*.yml` voor alleen Skript en YAML
    - Of `*.*` voor alle bestanden
8. Klik `OK` om op te slaan
9. Selecteer `SkEditor` in de lijst en zet hem bovenaan zodat deze regels worden afgedwongen

### SkEditor gebruiken met WinSCP

1. Verbind met je server in WinSCP
2. Open het gewenste bestand door te dubbelklikken of via `Edit`
3. SkEditor start met het geselecteerde bestand
4. Maak je wijzigingen in SkEditor
5. Sla op (Ctrl+S of Bestand > Opslaan)
6. WinSCP detecteert de wijziging en uploadt automatisch
7. Klaar! Je kunt verder met andere bestanden of WinSCP sluiten.
