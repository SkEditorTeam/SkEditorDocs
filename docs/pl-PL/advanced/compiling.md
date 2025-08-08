---
prev:
   text: 'Dodatki - Tworzenie dodatku'
   link: '/pl-PL/addons/creating-an-addon'
next:
   text: 'Zaawansowane - Wkład'
   link: '/advanced/contributing'
---

# Kompilowanie

Może zdarzyć się sytuacja, że będziesz chciał samemu skompilować SkEditora, na przykład w celu przetestowania nowych funkcji z gałęzi `dev`.
W .NET jest to dość łatwe i można to zrobić w kilku krokach.

## Wymagania wstępne

- [SDK .NET 8.0](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Git](https://git-scm.com/downloads)

## Klonowanie repozytorium

Repozytorium możesz sklonować za pomocą tego polecenia:

```bash
git clone -b dev/dev https://github.com/SkEditorTeam/SkEditor.git
```

Sklonuje ono gałąź `dev/dev` repozytorium. Jeśli interesuje Cię inna gałąź, możesz zastąpić `dev/dev` nazwą innej gałęzi albo całkowicie pominąć parametr `-b`, żeby sklonować gałąź `main`.

## Przejście do katalogu projektu

Repozytorium zawiera dwa projekty: `SkEditor` i `Installer`, więc musisz przejść do folderu `SkEditor`, żeby go skompilować. Możesz to zrobić za pomocą poniższego polecenia (o ile jesteś w katalogu głównym sklonowanego repozytorium):

```bash
cd SkEditor
```

## Kompilowanie projektu

Teraz, gdy jesteś w katalogu projektu, możesz skompilować i uruchomić program za pomocą polecenia:

```bash
dotnet run
```

I opublikować go za pomocą polecenia:

```bash
dotnet publish
```

Komenda ta zbuduje i opublikuje projekt, a gotowe pliki znajdziesz gdzieś w folderze `bin/Release/net8.0` (wynik polecenia powinien wskazać dokładną ścieżkę).

Ale to tylko najprostszy sposób na opublikowanie projektu. Jest wiele opcji, które możesz wykorzystać do dostosowania procesu budowania, które znajdziesz w [oficjalnej dokumentacji](https://learn.microsoft.com/dotnet/core/tools/dotnet-publish).

Na przykład, jeśli chcesz czysty i wydajny build, możesz użyć następującego polecenia:

```bash
dotnet publish -c Release -r win-x64 --no-self-contained -p:PublishSingleFile=true -p:PublishReadyToRun=true
```

Ta komenda:
- Kompiluje projekt w konfiguracji `Release`
- Celuje w środowisko `win-x64` (Windows 64-bit) (możesz to zmienić na `linux-x64`, `osx-x64` itp.)
- NIE załączy środowiska .NET (więc użytkownik będzie musiał mieć zainstalowane .NET 8.0)
- Publikuje projekt jako "pojedynczy plik" (a tak naprawdę jako pojedynczy plik wykonywalny - w folderze wyjściowym nadal będą pliki DLL, które są wymagane do działania aplikacji)
- Włącza kompilację R2R (ReadyToRun), co poprawia czas uruchamiania aplikacji

Możesz żonglować tymi ustawieniami jak tylko chcesz, ale komenda powyżej jest dobrym punktem wyjścia dla większości przypadków użycia i mniej więcej z takiej konfiguracji korzystamy w oficjalnych wydaniach SkEditora.