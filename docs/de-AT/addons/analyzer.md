# Analyzer

The Analyzer is an official addon for SkEditor that provides real-time code analysis directly in the editor. It gives you errors and warnings about your Skript code using a parser that's designed to be identical to the one used in the Skript plugin itself.

## Prerequisites
The Analyzer requires **Java 21** to run. Make sure you have it installed on your system. If you don't have Java 21, you can download it from the [Adoptium website](https://adoptium.net/). The JRE should be enough, but if you have the JDK installed, that works too.
When installing Java, you can choose to add it to your system PATH, which is recommended. If you don't do this, you'll need to specify the path to the Java executable in the Analyzer settings, as described below.

## Installation

Installing the Analyzer addon is straightforward:

1. Open the Marketplace in SkEditor (Top menu > Other > Marketplace)
2. Find and click on the "Analyzer" addon
3. Click the `Install` button
4. Restart SkEditor when prompted
5. You may see another restart notification after the first restart - this is normal for first-time installations, so restart SkEditor once more
6. The addon is now ready to use! If this is your first time using it or if SkAnalyzer is outdated, it will automatically download or update itself

## How to Use

Using the Analyzer is simple and intuitive:

The addon adds an `Analyze` button to the bottom bar of SkEditor (you can also press F1 as a shortcut). Click this button to analyze your currently open file.

After analysis, you'll see two information displays next to the `Analyze` button:
- **Errors and warnings** about your code
- **Statistics** showing the count of commands, functions, and events in your script

## Configuration

You can customize the Analyzer's behavior through SkEditor's settings:

1. Go to Top menu > Settings > Addons
2. Click on the `Analyzer` addon

### Available Settings

**Load Analyzer on Startup**
- When enabled: The Analyzer loads automatically when SkEditor starts
- When disabled: You'll need to click the `Load` button in the bottom bar to activate it

**Real-time Analyzer**
- When enabled: Your code is analyzed automatically as you type (with a short delay after you stop typing)
- When disabled: You need to manually click the `Analyze` button each time

**Analyzer Java Path**
- **Default**: Uses the Java executable from your system PATH
- **Custom**: Lets you browse and select a specific Java executable file

## Skript Addons Support

The Analyzer can work with almost any Skript addon, but you need to add them first:

1. In the Analyzer settings, click on "Skript Addons"
2. You'll see a list of currently loaded addons
3. To add an addon, click the `Add` button and select the addon's JAR file
4. To remove an addon, select it from the list and remove it
5. When you leave this page, the Analyzer will reload automatically