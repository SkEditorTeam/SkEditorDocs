---
prev:
   text: 'Premiers pas - Installation'
   link: '/first-steps/installation'
next: 
   text: 'Utilisation - Expériences'
   link: '/usage/experiments'
---

# Intégration FTP

Il n’y a pas d’explorateur FTP/SFTP intégré dans la version actuelle de l’application.
Toutefois, vous pouvez utiliser SkEditor avec un client FTP pour éditer les fichiers sur votre serveur presque sans friction.

## WinSCP

WinSCP est un client FTP populaire pour Windows, prenant en charge de nombreux protocoles et facile à utiliser.
Vous pouvez le télécharger depuis le [site de WinSCP](https://winscp.net/eng/download.php).

### Configurer WinSCP pour utiliser SkEditor

1. Lancez WinSCP
2. Dans le menu du haut, cliquez sur `View` puis sélectionnez `Preferences`
3. Dans la fenêtre des préférences, choisissez `Editors` dans la barre latérale gauche
4. Cliquez sur le bouton `Add`
5. Choisissez « External editor »
6. Dans le champ de texte, saisissez le chemin vers l’exécutable SkEditor (ou utilisez `Browse` pour le trouver)
    - Si vous avez installé SkEditor à l’emplacement par défaut, ce sera quelque chose comme `C:\Program Files\SkEditor\SkEditor.exe`
7. Dans la section "Editor autoselection", indiquez les types de fichiers à ouvrir avec SkEditor
    - Par exemple, pour n’ouvrir que les fichiers Skript et YAML: `*.sk,*.yml`
    - Vous pouvez aussi utiliser `*.*` pour tout ouvrir avec SkEditor
8. Cliquez sur `OK` pour enregistrer
9. Sélectionnez `SkEditor` dans la liste des éditeurs et déplacez-le en haut pour appliquer ces règles

### Utiliser SkEditor avec WinSCP

1. Connectez-vous à votre serveur via WinSCP
2. Ouvrez le fichier à modifier en double-cliquant ou en cliquant sur `Edit`
3. SkEditor s’ouvrira avec le fichier sélectionné
4. Faites vos modifications dans SkEditor
5. Enregistrez dans SkEditor (Ctrl + S ou Fichier > Enregistrer)
6. WinSCP détectera automatiquement les changements et téléversera le fichier modifié sur le serveur
7. Terminé ! Vous pouvez continuer à éditer d’autres fichiers ou fermer WinSCP.
