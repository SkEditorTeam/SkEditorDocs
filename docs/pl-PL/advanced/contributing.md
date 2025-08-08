---
prev:
   text: 'Zaawansowane - Kompilowanie'
   link: '/pl-PL/advanced/compiling'
next: false
---

# Wkład

Chcesz przyczynić się do SkEditora? Świetnie! Oto kilka wskazówek, które pomogą Ci zacząć.

## Zasady kodu

### Zasady ogólne

- Część zasad powinna być automatycznie egzekwowana przez plik `.editorconfig`
- Trzymaj się oficjalnych konwencji C# od Microsoftu - zwłaszcza jeśli chodzi o konwencje nazewnictwa!
- Używaj spacji zamiast tabulatorów
- Używaj `var` tylko wtedy, gdy typ jest oczywisty z prawej strony przypisania
- Preferuj składnię `Class class = new();` zamiast `new Class()` lub `var class = new Class()`
- Używaj nowej składni `list = [];`
- Nie nadużywaj komentarzy - kod powinien wyjaśniać się samemu gdy na niego patrzysz
- Otwierające nawiasy klamrowe powinny zawsze znajdować się w NOWEJ linii

### Konwencje nazewnictwa

- Klasy, interfejsy, enumy (typy wyliczeniowe), metody i właściwości powinny być nazwane używając `PascalCase`
- Interfejsy powinny być poprzedzone literą `I` (np. `IPrzykładowyInterfejs`)
- Zmienne lokalne i parametry powinny być nazwane używając `camelCase`
- Prywatne pola klasy powinny być poprzedzone znakiem `_` (np. `_prywatnePole`)
- Stałe powinny być nazwane używając `PascalCase`

::: tip
Ale... Wiesz co? Najważniejszą zasadą jest: **po prostu nie zrób totalnego chaosu!**

Współczesne IDE mogą automatycznie zastosować większość z tych zasad lub Cię o nich poinformować.
Nie trudno jest je też zastosować ręcznie. Więc nie martw się zbytnio o to!
:::

## Pull requesty

Powinieneś opierać swoją pracę na gałęzi `dev/dev`, a nie `main`. Gałąź `main` jest zarezerwowana dla stabilnych, gotowych wydań, ale to na `dev` odbywa się cały rozwój.

## Poprawki błędów

Poprawki błędó są zawsze mile widziane i doceniane, więc nie wahaj się stworzyć pull requesta, jeśli znajdziesz i poprawisz błąd w kodzie!

## Nowe funkcje

Nowe funkcje są również mile widziane, ale powinny być dobrze przemyślane i zaplanowane przed rozpoczęciem pracy nad nimi.

Zanim zaczniesz pracować nad nową funkcją, powinieneś albo otworzyć issue na GitHubie, albo skontaktować się na Discordzie (kanał `#dev` lub bezpośrednio z Notro w wiadomości prywatnej).
W ten sposób, możemy najpierw omówić funkcję. Nie chciałbym, aby Twoja praca poszła na marne!