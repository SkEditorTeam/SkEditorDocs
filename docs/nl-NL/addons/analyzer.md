---
prev:
   text: 'Experimenten - Hex-voorbeeld'
   link: '/usage/experiments/hex-preview'
next: 
   text: 'Add-ons - Een add-on maken'
   link: '/addons/creating-an-addon'
---

# Analyzer

De Analyzer is een officiële add-on voor SkEditor die realtime code-analyse direct in de editor biedt. Het geeft fouten en waarschuwingen over je Skript-code met een parser die is ontworpen om identiek te zijn aan die van de Skript-plugin zelf.

## Vereisten

De Analyzer vereist **Java 21** om te draaien. Zorg dat dit is geïnstalleerd. Als je Java 21 nog niet hebt, kun je het downloaden van de [Adoptium-website](https://adoptium.net/). De JRE is voldoende; de JDK werkt ook.
Bij het installeren kun je Java aan je systeem-PATH toevoegen, dit wordt aanbevolen. Doe je dit niet, dan moet je het pad naar het Java-uitvoerbestand opgeven in de Analyzer-instellingen, zoals hieronder beschreven.

## Installatie

Het installeren van de Analyzer-add-on is eenvoudig:

1. Open de Marketplace in SkEditor (Bovenste menu > Overig > Marketplace)
2. Zoek en klik op de add-on "Analyzer"
3. Klik op de knop `Install`
4. Herstart SkEditor wanneer daarom wordt gevraagd
5. Mogelijk zie je nog een herstartmelding na de eerste herstart – dit is normaal bij eerste installatie, herstart SkEditor nogmaals
6. De add-on is nu klaar voor gebruik! Als dit je eerste keer is of als SkAnalyzer verouderd is, wordt deze automatisch gedownload of bijgewerkt

## Gebruik

De add-on voegt een knop `Analyze` toe aan de onderste balk van SkEditor (sneltoets: F1). Klik op deze knop om het huidige bestand te analyseren.

Na de analyse zie je twee infoblokken naast de knop `Analyze`:

- Fouten en waarschuwingen over je code
- Statistieken met het aantal commando's, functies en events in je script

## Configuratie

Je kunt het gedrag van de Analyzer aanpassen via de instellingen van SkEditor:

1. Ga naar Bovenste menu > Instellingen > Add-ons
2. Klik op de add-on `Analyzer`

### Beschikbare instellingen

#### Analyzer laden bij opstarten

- Ingeschakeld: De Analyzer wordt automatisch geladen wanneer SkEditor start
- Uitgeschakeld: Je moet op de knop `Load` in de onderste balk klikken om deze te activeren

#### Realtime Analyzer

- Ingeschakeld: Je code wordt automatisch geanalyseerd tijdens het typen (met een korte vertraging)
- Uitgeschakeld: Je moet elke keer handmatig op de knop `Analyze` klikken

#### Analyzer Java-pad

- Standaard: gebruikt het Java-uitvoerbestand uit je systeem-PATH
- Aangepast: laat je een specifiek Java-uitvoerbestand kiezen

## Ondersteuning van Skript-addons

De Analyzer werkt met vrijwel elke Skript-add-on, maar je moet ze eerst toevoegen:

1. Klik in de Analyzer-instellingen op "Skript Addons"
2. Je ziet een lijst met geladen addons
3. Klik op `Add` en selecteer het JAR-bestand van de add-on om een add-on toe te voegen
4. Verwijder een add-on door deze te selecteren en te verwijderen
5. Bij het verlaten van deze pagina wordt de Analyzer automatisch herladen
