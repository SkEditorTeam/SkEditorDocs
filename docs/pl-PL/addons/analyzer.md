---
prev:
   text: 'Eksperymenty - Podgląd Hex'
   link: '/pl-PL/usage/experiments/hex-preview'
next: 
   text: 'Dodatki - Tworzenie dodatku'
   link: '/pl-PL/addons/creating-an-addon'
---

# Analyzer

Analyzer to oficjalny dodatek do SkEditora, który pozwala analizować kod w czasie rzeczywistym bezpośrednio w edytorze. Wyświetla błędy i ostrzeżenia dotyczące kodu Skript przy użyciu parsera, który został zaprojektowany tak, aby był identyczny z tym używanym w samym Skript.

## Wymagania wstępne

Analyzer wymaga do działania **Javy 21**. To bardzo ważne, żebyś upewnił się, że masz ją zainstalowaną. Jeśli nie masz, możesz ją pobrać ze [strony Adoptium](https://adoptium.net/). Samo JRE powinno wystarczyć, ale jeśli masz zainstalowany JDK, jak najbardziej zadziała.
Podczas instalacji Javy można dodać ją do systemowej zmiennej PATH, co jest przez nas zalecane. Jeśli tego nie zrobisz, będziesz musiał ręcznie określić ścieżkę do pliku wykonywalnego Javy w ustawieniach Analyzer, jak opisano poniżej.

## Instalacja

Instalacja dodatku Analyzer jest bardzo prosta:

1. Otwórz Rynek w SkEditorze (Menu górne > Inne > Rynek).
2. Znajdź i wybierz dodatek "Analyzer".
3. Kliknij przycisk "Zainstaluj"
4. Uruchom ponownie SkEditor po wyświetleniu informacji
5. Po pierwszym restarcie może pojawić się kolejne powiadomienie o ponownym uruchomieniu - jest to normalne w przypadku instalacji po raz pierwszy, więc zrestartuj SkEditora jeszcze raz
6. Analyzer jest teraz gotowy do użycia! Jeśli korzystasz z niego po raz pierwszy lub jeśli SkAnalyzer jest nieaktualny, zostanie on automatycznie pobrany lub zaktualizowany.

## Jak używać

Korzystanie z Analyzer jest proste i intuicyjne:

Dodatek dodaje przycisk `Analyze` do dolnego paska SkEditora (można również używać F1 jako skrótu). Kliknij ten przycisk, aby przeanalizować aktualnie otwarty plik.

Po przeanalizowaniu, obok przycisku `Analyze` wyświetlone zostaną dwie informacje:

- **Błędy i ostrzeżenia** o Twoim kodzie
- **Statystyki** wyświetlające liczbę poleceń, funkcji i zdarzeń w skrypcie

## Konfiguracja

Zachowanie Analyzera można dostosować w ustawieniach SkEditora:

1. Przejdź do menu górnego > Ustawienia > Dodatki
2. Kliknij na dodatek `Analyzer`

### Dostępne ustawienia

#### Load Analyzer on Startup

- Po włączeniu: Analyzer ładuje się automatycznie po uruchomieniu SkEditora
- Gdy wyłączone: Musisz kliknąć przycisk `Load` na dolnym pasku, aby go załadować

#### Real-time Analyzer

- Po włączeniu: Kod jest analizowany automatycznie podczas pisania (po krótkiej chwili, gdy przestaniesz pisać).
- Gdy wyłączone: Musisz ręcznie klikać przycisk `Analyze` za każdym razem.

#### Analyzer Java Path

- **Default**: Używa domyślnej ścieżki Javy z systemowej zmiennej PATH
- **Custom**: Pozwala wybrać niestandardową ścieżkę do pliku wykonywalnego Javy

## Wsparcie dla dodatków Skript

Analyzer może działać z prawie każdym dodatkiem Skript, ale musisz go najpierw dodać:

1. W ustawieniach Analyzera kliknij "Skript Addons".
2. Zobaczysz listę aktualnie dodanych dodatków
3. Aby dodać dodatek, kliknij przycisk `Add` i wybierz plik JAR dodatku.
4. Aby usunąć dodatek, wybierz go z listy i usuń.
5. Po opuszczeniu tej strony Analyzer przeładuje się automatycznie.
