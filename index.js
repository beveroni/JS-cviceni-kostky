console.log('funguju!');
// 1)Spusťte aplikaci pomocí npx serve a prohlédněte si, jak vypadá.
// 2)Podle vzoru uvedeného v souboru index.html vytvořte v oddělené složce komponentu Dice. Komponenta bude vracet DOM element div (se třídou dice) tak, jako jsme se učili v lekci. Uvnitř bude div zobrazující číslo a button s textem „hodit“, jako je to ve vzorovém index.html. Zatím nastavte (pomocí třídy) číslo, jaké si vyberete.
// 3) Do složky komponenty přesuňte patřičné styly a obrázky související s komponentou a komponentu také správně exportujte.
// 4)Zakomentujte v index.html kostky v HTML kódu.
// 5) Vložte JavaScriptem v index.js na stránku několik kostek s použitím komponenty Dice. Všechny kostky zatím budou mít vámi zvolené číslo.
// Upravte komponentu Dice tak, že bude ve svých props očekávat vlastnost side, která udává číslo zobrazené na kostce. Číslo v property side použijete pro nastavení třídy dice__side--X (místo X bude hodnota side) vnitřního divu s třídou dice__side, který zobrazuje číslo.
// Upravte kód v index.js tak, aby na zobrazených kostkách byla různá čísla.
// Upravte komponentu Dice tak, aby se při kliknutí na tlačítko hodit vypsalo náhodné číslo (zatím) do konzole. K vygenerování náhodného čísla využijte již připravenou funkci roll, kterou si můžete z hlavního indexu.js přesunout do komponenty Dice.
// Upravte komponentu tak, aby se při kliknutí na tlačítko změnilo číslo zobrazené na kostce – aby byla nastavena správná třída dice__side--X (místo X bude náhodné číslo). Postupovat můžete např. tak, že odstraníte všechny třídy dice__side--1 až dice__side--6 a nakonec nastavíte jednu třídu odpovídající náhodnému číslu.

import { Dice } from './Dice/dice.js';

const diceElm = document.querySelector('#dice-row');
diceElm.append(Dice({ side: 6 }));
diceElm.append(Dice({ side: 6 }));
diceElm.append(Dice({ side: 6 }));
diceElm.append(Dice({ side: 6 }));
