---
prev:
   text: 'Addons - Creating an Addon'
   link: '/addons/creating-an-addon'
next:
   text: 'Advanced - Contributing'
   link: '/advanced/contributing'
---

# Compiling

You might want to compile SkEditor yourself, for example, to test new features from a `dev` branch.
This is quite easy to do in .NET, and you can get it done in a few steps.

## Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Git](https://git-scm.com/downloads)

::: warning
Make sure you have the latest version of the SDK installed. The apt package manager on Linux often installs an older version that could cause issues during compilation. Use the installation script to install the latest version.
:::

## Cloning the repository

You can clone the repository using the following command:

```bash
git clone -b dev/dev https://github.com/SkEditorTeam/SkEditor.git
```

This will clone the `dev/dev` branch of the repository. If you want to clone a different branch, you can replace `dev/dev` with the desired branch name or leave out the `-b` option completely to clone the `main` branch.

## Navigating to the project directory

The repository contains two projects: `SkEditor` and `Installer`, so you need to navigate to the `SkEditor` project directory to compile it. You can do this with the following command (assuming you are in the root directory of the cloned repository):

```bash
cd SkEditor
```

## Compiling the project

Now you can run the app using a single command:

```bash
dotnet run
```

And publish it with:

```bash
dotnet publish
```

This will build and publish the project, with the output being placed somewhere in the `bin/Release/net8.0` folder (the command output will tell you the exact path).

But that's only the simplest way to publish the project. There are tons of options you can use to customize the build process, which you can find in the [official documentation](https://learn.microsoft.com/dotnet/core/tools/dotnet-publish).

If you want a clean and efficient build, you can use the following command:

```bash
dotnet publish -c Release -r win-x64 --no-self-contained -p:PublishSingleFile=true -p:PublishReadyToRun=true
```

This command will:

- Make sure the build is in `Release` configuration
- Target the `win-x64` runtime (you can change this to `linux-x64`, `osx-x64`, etc. if needed)
- NOT include the .NET runtime in the output (so the user will need to have .NET 8.0 installed)
- Publish the project as a single file (well, a single executable file - there will still be some DLL files in the output folder that are required for the app to run)
- Enable R2R compilation, which improves the startup time of the application

You can tweak these options to fit your needs, but this is a good starting point for most use cases.
