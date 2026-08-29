---
prev:
   text: 'First Steps - Installation'
   link: '/first-steps/installation'
next: 
   text: 'Usage - FTP Integration'
   link: '/usage/ftp-integration'
---

# SkEditor 3 Alpha (Pre-releases)

::: warning Early Test Version
SkEditor 3 is currently in active alpha testing. It contains experimental features, may be unstable, and lacks some tools present in SkEditor 2.
:::

SkEditor 3 is a major overhaul of the editor, featuring a modern architecture, native AOT compilation for instant startup, integrated SFTP, redesigned settings, and experimental tools like the built-in Analyzer, Terminal, Split View, and more.

## Discord and feedback

You should not use the alpha versions without joining our Discord server.

- No auto-updates: Alpha builds do not update automatically. Announcements and pings about new releases are published exclusively on Discord.
- Bug reports and suggestions: We only accept feedback, bug reports, and feature suggestions in the dedicated Alpha category on Discord, not on GitHub issues.
- Getting the Alpha role: The Alpha role is not assigned automatically. You can claim it either by navigating to "Channels & Roles" at the top of the server channel list or by reacting to the role message in the announcements channel.

Join here: https://discord.skeditor.dev

## How to download

Because these are pre-release builds, they are not marked as the "Latest Release" on GitHub.

1. Go to the GitHub Releases page: https://github.com/SkEditorTeam/SkEditor/releases
2. Look for the latest tag marked with `v3.0.0-alpha.X` (make sure it has the Pre-release badge).
3. Download the archive for your operating system.

## Installation

- No .NET Runtime required: SkEditor 3 is compiled Ahead-Of-Time (AOT), meaning it runs as a native standalone executable without needing .NET installed (except macOS builds, which require .NET 10.0 Runtime).
- Windows: Extract the zip and run `SkEditor.exe`.
- Linux: Extract the zip, and run `./SkEditor` (it should already have executable permissions, but if not, run `chmod +x SkEditor`).
- macOS: Extract the zip and remove the quarantine attribute via terminal:
  `xattr -d com.apple.quarantine SkEditor.app`