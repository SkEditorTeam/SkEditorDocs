---
prev:
   text: 'Dodatki - Analyzer'
   link: '/pl-PL/addons/analyzer'
next: 
   text: 'Zaawansowane - Kompilowanie'
   link: '/pl-PL/advanced/compiling'
---

# Tworzenie dodatku

Chcesz rozszerzyć funkcjonalność SkEditora? Tworzenie dodatków to świetny sposób, aby to zrobić! Ten poradnik przeprowadzi cię przez proces tworzenia własnego dodatku do SkEditora.

::: warning OSTRZEŻENIE
Niniejszy poradnik zakłada, że masz już podstawową znajomość języka C#.
Jeśli dopiero zaczynasz przygodę z językiem C#, w pierwszej kolejności lepiej byś zapoznał się najpierw z podstawami tego języka. Ale tworzenie dodatku do SkEditora to może być również świetny sposób na naukę C#!
:::

## Wymagania wstępne

- [SDK .NET 8.0](https://dotnet.microsoft.com/download/dotnet/8.0)
- Edytor kodu lub IDE obsługujące programowanie w języku C# (np. Visual Studio, Rider lub Visual Studio Code)

Tworzenie projektu w edytorze tekstu jest możliwe, ale korzystanie z IDE znacznie ułatwi i usprawni ten proces.

Ten poradnik będzie używał JetBrains Rider jako IDE. Proces powinien być podobny w Visual Studio, ale VS Code nie będzie działać tak samo dobrze.

## Tworzenie projektu dodatku

1. **Stwórz nowy projekt**: Otwórz IDE i utwórz nowy projekt biblioteki klas dla platformy .NET 8.0. Nadaj mu dowolną nazwę.
2. **Dodaj API SkEditora**: Dodaj odniesienie do API SkEditor. Można to zrobić, dodając [pakiet SkEditor z NuGet](https://www.nuget.org/packages/SkEditor/) w pliku projektu lub za pośrednictwem menedżera pakietów NuGet w IDE.

## Implementacja dodatku

Powinieneś mieć klasę z nazwą projektu wygenerowaną przez IDE. Ta klasa będzie podstawą twojego dodatku.
Po pierwsze, musisz zaimplementować interfejs `IAddon` z API SkEditor. Interfejs ten wymaga zaimplementowania pewnych właściwości i metod.

Oto podstawowy przykład tego, jak może wyglądać klasa dodatku:

```csharp
using SkEditor.API;

namespace SkEditorTestAddon;

public class TestAddon : IAddon
{
    public string Name => "TestAddon";

    public string Identifier => "TestAddon";

    public string Version => "1.0.0";

    public string? Description => "A test addon for SkEditor";

    public Version GetMinimalSkEditorVersion() => new(2, 9, 3);

    public void OnEnable()
    {
        SkEditorAPI.Windows.ShowMessage("Enabled!", "TestAddon enabled!");
    }
}
```

## Używanie dodatku

1. **Kompilacja projektu**: Po zaimplementowaniu dodatku musisz zbudować projekt, aby wygenerować plik DLL.
   Możesz kliknąć prawym przyciskiem myszy projekt w IDE i wybrać `Build` lub `Pack`. Można również użyć wiersza poleceń:

    ```bash
    dotnet build -c Release
    ```

2. **Znajdź plik DLL**: Po skompilowaniu, znajdź wygenerowany plik DLL. Powinien on znajdować się w folderze takim jak `/bin/Release/net8.0` i mieć nazwę projektu (np. `SkEditorTestAddon.dll`).
3. **Zainstaluj dodatek**: Skopiuj plik DLL do folderu wewnątrz katalogu dodatków SkEditor, który znajduje się w `%appdata%/SkEditor/Addons` na Windowsie, `~/.config/SkEditor/Addons` na Linuksie i `~/Library/Application Support/SkEditor/Addons` na macOS.
   Na przykład, możesz stworzyć folder o nazwie `TestAddon` i wrzucić do niego plik DLL. Możesz także włączyć `Tryb deweloperski` w ustawieniach SkEditora (sekcja `O SkEditorze`), a następnie użyć przycisku `Load from file` w sekcji `Dodatki`, aby załadować dodatek bezpośrednio z pliku DLL.
4. **Zrestartuj SkEditor**: Po wrzuceniu pliku DLL do folderu dodatków, uruchom ponownie SkEditor, aby go załadować. Jeśli użyłeś przycisku `Load from file`, nie powinno to być konieczne.
5. **Miłego!** Jeśli masz jakieś pytania lub potrzebujesz pomocy, możesz śmiało pytać na serwerze Discord SkEditora - istnieje dedykowany kanał `#dev`, na którym możesz na ten temat dyskutować!