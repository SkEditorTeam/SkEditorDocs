---
prev:
   text: 'Expériences - Aperçu Hex'
   link: '/usage/experiments/hex-preview'
next: 
   text: 'Extensions - Créer une extension'
   link: '/addons/creating-an-addon'
---

# Analyzer

Analyzer est une extension officielle pour SkEditor qui fournit une analyse de code en temps réel directement dans l’éditeur. Elle signale les erreurs et avertissements dans votre code Skript à l’aide d’un analyseur conçu pour être identique à celui utilisé par le plugin Skript.

## Prérequis

Analyzer nécessite **Java 21**. Assurez-vous qu’il est installé sur votre système. Si vous ne l’avez pas, vous pouvez le télécharger depuis le [site Adoptium](https://adoptium.net/). Le JRE suffit, mais le JDK fonctionne également.
Lors de l’installation de Java, vous pouvez l’ajouter au PATH du système, ce qui est recommandé. Sinon, vous devrez spécifier le chemin vers l’exécutable Java dans les paramètres d’Analyzer, comme décrit ci-dessous.

## Installation

L’installation de l’extension Analyzer est simple:

1. Ouvrez le Marketplace dans SkEditor (Menu du haut > Autre > Marketplace)
2. Recherchez et cliquez sur l’extension "Analyzer"
3. Cliquez sur `Install`
4. Redémarrez SkEditor lorsque vous y êtes invité
5. Un second redémarrage peut être demandé après le premier — c’est normal lors de la première installation
6. L’extension est prête ! Si c’est votre première utilisation ou si SkAnalyzer n’est pas à jour, il se téléchargera ou se mettra à jour automatiquement

## Utilisation

L’extension ajoute un bouton `Analyze` dans la barre inférieure de SkEditor (raccourci F1). Cliquez pour analyser le fichier ouvert.

Après l’analyse, vous verrez deux indicateurs à côté du bouton `Analyze`:

- Erreurs et avertissements à propos de votre code
- Statistiques: nombre de commandes, fonctions et événements dans votre script

## Configuration

Vous pouvez personnaliser le comportement d’Analyzer via les paramètres de SkEditor:

1. Menu du haut > Paramètres > Extensions
2. Cliquez sur `Analyzer`

### Réglages disponibles

#### Charger Analyzer au démarrage

- Activé: Analyzer se charge automatiquement au lancement de SkEditor
- Désactivé: vous devrez cliquer sur le bouton `Load` dans la barre inférieure pour l’activer

#### Analyse en temps réel

- Activée: votre code est analysé automatiquement lorsque vous tapez (avec un petit délai après la frappe)
- Désactivée: vous devez cliquer manuellement sur le bouton `Analyze` à chaque fois

#### Chemin Java pour Analyzer

- Par défaut: utilise l’exécutable Java présent dans le PATH
- Personnalisé: permet de choisir un exécutable Java spécifique

## Prise en charge des addons Skript

Analyzer peut fonctionner avec presque tous les addons Skript, mais vous devez les ajouter:

1. Dans les paramètres d’Analyzer, cliquez sur "Skript Addons"
2. Vous verrez la liste des addons actuellement chargés
3. Pour ajouter un addon, cliquez sur `Add` et sélectionnez le fichier JAR de l’addon
4. Pour en supprimer un, sélectionnez-le et supprimez-le
5. En quittant cette page, Analyzer se rechargera automatiquement
