---
prev:
   text: 'Pierwsze kroki - Instalacja'
   link: '/pl-PL/first-steps/installation'
next: 
   text: 'Korzystanie - Eksperymenty'
   link: '/pl-PL/usage/experiments'
---

# Integracja FTP

W obecnej wersji aplikacji nie ma wbudowanego eksploratora FTP/SFTP.
Można jednak bezproblemowo używać SkEditora z klientem FTP do edycji plików na serwerze.

## WinSCP

WinSCP to popularny klient FTP dla systemu Windows, obsługujący wiele protokołów i będący łatwy w użyciu.
Możesz go pobrać ze [strony WinSCP](https://winscp.net/eng/download.php).

### Ustawienie SkEditora w WinSCP

1. Uruchom WinSCP
2. W górnym menu kliknij `Widok` i wybierz `Preferencje`.
3. W oknie Preferencje wybierz `Edytor` z lewego paska bocznego
4. Kliknij przycisk `Dodaj...`
5. Wybierz "Zewnętrzny edytor"
6. W polu tekstowym poniżej wpisz ścieżkę do pliku `SkEditor.exe` (lub użyj przycisku `Przeglądaj`, aby go znaleźć).
    - Jeśli zainstalowałeś SkEditora w domyślnej lokalizacji, powinien znajdować się tu: `C:\Program Files\SkEditor\SkEditor.exe`
7. W sekcji "Automatyczny wybór edytora" określ typy plików, które chcesz otwierać za pomocą SkEditora
    - Na przykład, aby otwierał tylko pliki Skript i YAML, można wpisać `*.sk,*.yml`
    - Możesz również użyć `*.*`, by wszystkie pliki były otwierane w SkEditorze
8. Kliknij `OK`, by zapisać ustawienia
9. Wybierz `SkEditor` z listy edytorów i przenieś go na górę listy, aby zmiana na pewno zadziałała

### Używanie SkEditor z WinSCP

1. Połącz się z serwerem w WinSCP
2. Otwórz plik, który chcesz edytować, dwukrotnie go klikając lub używając PPM -> `Edit`.
3. SkEditor uruchomi się z wybranym plikiem
4. Zmodyfikuj plik w SkEditorze
5. Zapisz plik w SkEditor (Ctrl + S lub Plik > Zapisz)
6. WinSCP automatycznie wykryje zmiany i prześle zmodyfikowany plik z powrotem na serwer.
7. Gotowe! Możesz teraz kontynuować edycję innych plików lub zamknąć WinSCP.