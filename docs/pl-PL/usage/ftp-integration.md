---
prev:
   text: 'First Steps - Installation'
   link: '/first-steps/installation'
next: 
   text: 'Usage - Experiments'
   link: '/usage/experiments'
---

# FTP Integration

There's no built-in FTP/SFTP explorer in the current version of the app.
However, you can use SkEditor with an FTP client to edit files on your server almost seamlessly.

## WinSCP

WinSCP is a popular FTP client for Windows that supports many protocols and is easy to use.
You can download it from the [WinSCP website](https://winscp.net/eng/download.php).

### Setting up WinSCP to use SkEditor

1. Launch WinSCP
2. In the top menu, click on `View` and select `Preferences`
3. In the Preferences window, select `Editors` from the left sidebar
4. Click the `Add` button
5. Choose "External editor"
6. In the text field below, enter the path to the SkEditor executable (or use the `Browse` button to find it)
    - If you installed SkEditor in the default location, it should be something like `C:\Program Files\SkEditor\SkEditor.exe`
7. In the "Editor autoselection" section, specify the file types you want to open with SkEditor
    - For example, to open only Skript and YAML files, you can enter `*.sk,*.yml`
    - You can also use `*.*` to open all files with SkEditor
8. Click `OK` to save the settings
9. Select `SkEditor` from the list of editors and move it to the top of the list to make sure it will enforce these rules

### Using SkEditor with WinSCP

1. Connect to your server using WinSCP
2. Open the file you want to edit by double-clicking it or selecting it and clicking the `Edit` button
3. SkEditor will launch with the selected file
4. Make your changes in SkEditor
5. Save the file in SkEditor (Ctrl + S or File > Save)
6. WinSCP will automatically detect the changes and upload the modified file back to the server
7. Done! You can now continue editing other files or close WinSCP.
