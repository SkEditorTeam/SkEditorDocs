---
prev:
   text: 'First Steps - Introduction'
   link: '/en-US/first-steps/intro'
next: 
   text: 'Usage - FTP Integration'
   link: '/en-US/usage/ftp-integration'
---

# Installation

SkEditor is straightforward to install across different platforms. Follow the instructions below for your operating system.

## Prerequisites

Before installing SkEditor, make sure you have the .NET 8.0 Runtime installed on your system. You can download it from the [.NET downloads page](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

## Windows

SkEditor offers three installation methods for Windows users:

### Method 1: Installer (Recommended)

1. Go to the [Releases page](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Download `SkEditorInstaller.msi`
3. Run the installer and follow the setup prompts
4. SkEditor will install to `C:\Program Files\SkEditor` by default and create a desktop shortcut

### Method 2: Windows Package Manager (winget)

For users with winget installed (it comes pre-installed on Windows 11 and recent Windows 10 versions):

```bash
winget install Notro.SkEditor
```

### Method 3: Portable Version

1. Download the appropriate `.zip` file from the [Releases page](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Extract it to your preferred directory
3. Run `SkEditor.exe` directly

::: info Note on Portable Version
Despite being "portable," this version still requires .NET Runtime and creates files in `%AppData%`.
:::

::: tip ARM64 Devices
ARM64 users must use the portable ARM64 version since the installer and winget versions are x64 only.
:::

## Linux

Linux users can run SkEditor using the portable version:

1. Download the Linux `.zip` file from the [Releases page](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Extract it to your preferred directory
3. Set executable permissions:
   ```bash
   chmod +x SkEditor
   ```
4. Run the application

::: details Future Linux Support
I'm currently looking into publishing SkEditor as a Flatpak, which would make it easier to install on Linux systems. While it's not my top priority right now, I hope to have it ready in the future. If you're interested in helping with this, please reach out to me on Discord!
:::

## macOS
Installing SkEditor on macOS is a bit more complicated because of Apple's security policies. Follow these steps:
1. Determine whether you have an Intel or Apple Silicon Mac:
   - For Intel Macs, download the x64 version.
   - For Apple Silicon Macs, download the ARM64 version.
   - If you're unsure, you can check your Mac's architecture by going to "About This Mac" in the Apple menu.
2. Download the appropriate `.zip` file from the [Releases page](https://github.com/SkEditorTeam/SkEditor/releases/latest)
3. Extract the contents of the `.zip` file. You should now have the SkEditor.app package.
4. Open a terminal window and navigate to the directory where you extracted SkEditor.
5. Run the following command to allow SkEditor to run:
   ```bash
   xattr -d com.apple.quarantine SkEditor.app
   ```
6. It should now work fine!

::: details Why the Terminal Command?
You might wonder why you need to run some sketchy command in the terminal. This is because of macOS's security policies that prevent apps downloaded from the internet from running without explicit permission. The command removes the quarantine attribute, allowing SkEditor to run without issues.

I can't provide a more user-friendly solution - it would require paying Apple for a developer certificate.
:::