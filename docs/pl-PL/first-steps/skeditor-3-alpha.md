---
prev:
   text: 'Pierwsze kroki - Instalacja'
   link: '/pl-PL/first-steps/installation'
next: 
   text: 'Korzystanie - Integracja FTP'
   link: '/pl-PL/usage/ftp-integration'
---

# SkEditor 3 Alpha (Wersje testowe)

::: warning Wczesna wersja testowa
SkEditor 3 znajduje się obecnie w fazie aktywnych testów alpha. Zawiera eksperymentalne funkcje, może być niestabilny i nie posiada jeszcze części narzędzi ze SkEditora 2.
:::

SkEditor 3 to gruntowna przebudowa edytora, wprowadzająca nową architekturę, natywną kompilację AOT zapewniającą błyskawiczny start, wbudowane SFTP, całkowicie nowe ustawienia oraz eksperymentalne narzędzia, takie jak wbudowany Analyzer, Terminal czy Podzielony widok.

## Discord i zgłaszanie uwag

Ważna informacja: nie powinieneś korzystać z wersji alpha bez dołączenia do naszego serwera Discord.

- Brak automatycznych aktualizacji: Wydania alpha nie aktualizują się same. Informacje i powiadomienia o nowych kompilacjach publikowane są wyłącznie na Discordzie.
- Zgłaszanie błędów i propozycji: Opinie, błędy i sugestie przyjmujemy wyłącznie na dedykowanych kanałach testerskich na Discordzie, a nie w issue na GitHubie.
- Odbieranie roli testera: Rola Alpha Tester nie jest przypisywana automatycznie. Możesz ją odebrać w zakładce "Kanały i role" na samej górze listy kanałów lub klikając odpowiednią reakcję na kanale z ogłoszeniami.

Dołącz tutaj: https://discord.skeditor.dev

## Jak pobrać

Wersje testowe nie są oznaczone jako "Latest Release" na GitHubie.

1. Przejdź do strony Releases na GitHubie: https://github.com/SkEditorTeam/SkEditor/releases
2. Znajdź najnowsze wydanie z tagiem `v3.0.0-alpha.X` (upewnij się, że ma oznaczenie Pre-release).
3. Pobierz paczkę przeznaczoną dla Twojego systemu operacyjnego.

## Instalacja i wymagania

- Brak wymogu .NET Runtime: SkEditor 3 jest kompilowany natywnie, więc działa samodzielnie bez konieczności instalowania środowiska .NET (wyjątkiem są wersje na macOS, które wymagają .NET 10.0 Runtime).
- Windows: Rozpakuj archiwum zip i uruchom `SkEditor.exe`.
- Linux: Rozpakuj archiwum zip i uruchom `./SkEditor` (plik powinien mieć już uprawnienia wykonywania, ale jeśli nie, użyj `chmod +x SkEditor`).
- macOS: Rozpakuj archiwum zip i usuń atrybut kwarantanny w terminalu:
  `xattr -d com.apple.quarantine SkEditor.app`