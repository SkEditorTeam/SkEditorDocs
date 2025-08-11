---
prev:
   text: 'Premiers pas - Introduction'
   link: '/first-steps/intro'
next: 
   text: 'Utilisation - Intégration FTP'
   link: '/usage/ftp-integration'
---

# Installation

SkEditor est simple à installer sur différentes plates-formes. Suivez les instructions ci-dessous selon votre système d’exploitation.

## Prérequis

Avant d’installer SkEditor, assurez-vous d’avoir le Runtime .NET 8.0 installé sur votre système. Vous pouvez le télécharger depuis la [page de téléchargement .NET](https://dotnet.microsoft.com/download/dotnet/8.0).

## Windows

SkEditor propose trois méthodes d’installation pour les utilisateurs Windows:

### Méthode 1: Programme d’installation (recommandé)

1. Rendez-vous sur la [page des versions](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Téléchargez `SkEditorInstaller.msi`
3. Lancez l’installeur et suivez les étapes
4. Par défaut, SkEditor sera installé dans `C:\Program Files\SkEditor` et un raccourci sera créé sur le bureau

### Méthode 2: Gestionnaire de paquets Windows (winget)

Si vous avez winget (préinstallé sur Windows 11 et versions récentes de Windows 10):

```bash
winget install Notro.SkEditor
```

### Méthode 3: Version portable

1. Téléchargez l’archive `.zip` appropriée depuis la [page des versions](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Extrayez-la dans le répertoire de votre choix
3. Exécutez `SkEditor.exe` directement

::: info Remarque sur la version portable
Même si elle est « portable », cette version nécessite tout de même le Runtime .NET et crée des fichiers dans `%AppData%`.
:::

::: tip Appareils ARM64
Les utilisateurs ARM64 doivent utiliser la version portable ARM64, car les versions installateur et winget sont uniquement x64.
:::

## Linux

Les utilisateurs Linux peuvent exécuter SkEditor avec la version portable:

1. Téléchargez l’archive `.zip` Linux depuis la [page des versions](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Extrayez-la dans le répertoire de votre choix
3. Rendez le fichier exécutable:

   ```bash
   chmod +x SkEditor
   ```

4. Lancez l’application

::: details Support Linux futur
Je prévois de publier SkEditor comme Flatpak pour simplifier l’installation sur Linux. Ce n’est pas ma priorité immédiate, mais j’espère le proposer à l’avenir. Si vous souhaitez aider, contactez-moi sur Discord !
:::

## macOS

L’installation sur macOS est un peu plus compliquée à cause des politiques de sécurité Apple. Suivez ces étapes:

1. Déterminez si vous avez un Mac Intel ou Apple Silicon:
   - Pour Intel, téléchargez la version x64.
   - Pour Apple Silicon, téléchargez la version ARM64.
   - Si vous ne savez pas, consultez « À propos de ce Mac » dans le menu Apple.
2. Téléchargez l’archive `.zip` appropriée depuis la [page des versions](https://github.com/SkEditorTeam/SkEditor/releases/latest)
3. Extrayez le contenu. Vous devriez obtenir le paquet SkEditor.app.
4. Ouvrez un terminal et naviguez vers le dossier où vous avez extrait SkEditor.
5. Exécutez la commande suivante pour autoriser l’exécution:

   ```bash
   xattr -d com.apple.quarantine SkEditor.app
   ```

6. Ça devrait fonctionner !

::: details Pourquoi cette commande terminal ?
macOS applique des politiques de sécurité qui empêchent l’exécution des apps téléchargées sur Internet sans autorisation explicite. La commande supprime l’attribut de quarantaine afin de permettre l’exécution de SkEditor.

Je ne peux pas fournir une solution plus conviviale sans payer un certificat développeur Apple.
:::
