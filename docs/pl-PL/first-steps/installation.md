---
prev:
   text: 'Pierwsze kroki - Wprowadzenie'
   link: '/pl-PL/first-steps/intro'
next: 
   text: 'Korzystanie - Integracja FTP'
   link: '/pl-PL/usage/ftp-integration'
---

# Instalacja

SkEditor można łatwo zainstalować na wielu systemach. Postępuj zgodnie z poniższymi instrukcjami dla swojego systemu operacyjnego.

## Wymagania wstępne

Przed zainstalowaniem SkEditora musisz upewnić się, że masz zainstalowany .NET 8.0 Runtime. Można go pobrać ze [strony pobierania .NET](https://dotnet.microsoft.com/download/dotnet/8.0).

## Windows

SkEditor oferuje trzy metody instalacji dla użytkowników Windowsa:

### Metoda 1: Instalator (zalecana)

1. Przejdź do strony [Releases](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Pobierz `SkEditorInstaller.msi`
3. Uruchom instalator i postępuj zgodnie z instrukcjami instalacji
4. SkEditor domyślnie zainstaluje się w `C:\Program Files\SkEditor` i utworzy skrót na pulpicie

### Metoda 2: Menedżer pakietów Windows (winget)

Dla osób z zainstalowanym wingetem (jest preinstalowany w Windows 11 i nowszych wersjach Windows 10):

```bash
winget install Notro.SkEditor
```

### Metoda 3: Wersja przenośna

1. Pobierz odpowiedni plik `.zip` ze [strony Releases](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Rozpakuj go do wybranego folderu
3. Uruchom bezpośrednio plik `SkEditor.exe`

::: info Uwaga dotycząca wersji przenośnej
Pomimo bycia "przenośną", ta wersja nadal wymaga .NET Runtime i tworzy pliki w `%AppData%`.
:::

::: tip Urządzenia ARM64
Użytkownicy ARM64 muszą korzystać z przenośnej wersji ARM64, ponieważ wersje instalatora i winget są tylko x64.
:::

## Linux

Użytkownicy Linuksa mogą uruchomić SkEditor w wersji przenośnej:

1. Pobierz plik `.zip` dla Linuksa ze [strony Releases](https://github.com/SkEditorTeam/SkEditor/releases/latest)
2. Rozpakuj go do wybranego folderu
3. Oznacz plik jako wykonywalny:

   ```bash
   chmod +x SkEditor
   ```

4. Uruchom aplikację:

   ```bash
   ./SkEditor
   ```

::: details Obsługa Linuksa w przyszłości
Obecnie zastanawiam się nad opublikowaniem SkEditor jako Flatpak, co ułatwiłoby jego instalację na Linuksie. Choć nie jest to obecnie moim priorytetem, mam nadzieję, że w niedalekiej przyszłości uda mi się to zrobić. Jeśli jesteś zainteresowany pomocą w zakresie publikacji SkEditora na Linuksie, skontaktuj się ze mną na Discordzie!
:::

## macOS

Instalacja SkEditora na macOS jest nieco bardziej skomplikowana ze względu na politykę bezpieczeństwa Apple. Wykonaj następujące kroki:

1. Określ, czy posiadasz Maczka z Intelem czy Apple Silicon:
   - W przypadku Intela, pobierz wersję x64.
   - Jeśli masz Apple Silicon, pobierz wersję ARM64.
   - Jeśli nie jesteś pewny, możesz sprawdzić architekturę w sekcji "Informacje o tym Macu" w menu.
2. Pobierz odpowiedni plik `.zip` ze [strony Releases](https://github.com/SkEditorTeam/SkEditor/releases/latest)
3. Wypakuj zawartość pliku `.zip`. Powinieneś mieć teraz pakiet `SkEditor.app`.
4. Otwórz terminal i przejdź do katalogu, w którym rozpakowałeś plik.
5. Uruchom tę komendę, aby zezwolić na uruchomienie SkEditora:

   ```bash
   xattr -d com.apple.quarantine SkEditor.app
   ```

6. Teraz powinno działać!

::: details O co chodzi z tą komendą?
Możesz zastanawiać się, czemu musisz uruchomić jakąś podejrzaną komendę w terminalu. To przez zasady bezpieczeństwa macOS, które nie pozwalają uruchamianie aplikacji pobranych z internetu bez wyraźnego pozwolenia. Komenda ta usuwa atrybut kwarantanny, pozwalając na uruchomienie aplikacji.

Nie mogę zapewnić bardziej przyjaznego dla użytkownika rozwiązania - wymagałoby to zapłacenia Apple za certyfikat dewelopera.
:::
