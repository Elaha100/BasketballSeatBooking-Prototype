HEAD
# BasketballSeatBooking-Prototype

🏀 Basketball Seat Booking Prototype

Webbaserad prototyp för bokning av platser till en basketmatch (Lakers vs Chicago).
Systemet låter användaren välja lag, boka platser, bekräfta bokning och få en bekräftelsesida.

Projektet är byggt med HTML, CSS och JavaScript (frontend-prototyp).

👥 Team

Individuell inlämning

Namn	Roll
Ditt namn	Utvecklare
⚙ Funktioner

Visa match (Lakers vs Chicago)

Dynamisk bakgrund (gul/röd beroende på lag)

Välja platser visuellt

Markera platser som selected

Bekräfta bokning

Sammanfattning av valda platser

Spara bokningsdata i localStorage

Slutföra bokning

Tack-sida efter slutförd bokning

🧱 Projektstruktur
BasketballSeatBooking/
│
├── README.md
├── AI_LOG.md
├── docs/
│   ├── class-diagram.png
│   └── sequence-diagram.png
│
└── ui/
    ├── index.html
    ├── page2.html
    ├── confirm.html
    ├── thanks.html
    ├── components.html
    ├── style.css
    └── script.js
📋 Kravspecifikation
🎯 Problem Statement

Användare behöver ett enkelt sätt att boka sittplatser till en basketmatch online, med tydlig visuell representation av tillgängliga platser.

👤 Stakeholders

Användare (kund) – vill boka platser enkelt

Arrangör – vill sälja platser

Systemadministratör – vill att systemet fungerar stabilt

✅ Funktionella krav

Systemet ska visa en match mellan Lakers och Chicago

Användaren ska kunna välja platser

Valda platser ska markeras visuellt

Systemet ska visa antal valda platser

Användaren ska kunna bekräfta bokning

Bokningsdata ska sparas temporärt

Systemet ska visa en sammanfattning innan slutförande

En tack-sida ska visas efter slutförd bokning

⚡ Icke-funktionella krav

Systemet ska vara responsivt

Systemet ska ha tydlig visuell design

Systemet ska fungera utan backend (frontend-prototyp)

🧭 Use Case – Boka platser

Actor: Användare

Preconditions:

Användaren är på matchsidan

Main Flow:

Användaren klickar på "Book Tickets"

Användaren väljer platser

Användaren klickar "Confirm Booking"

Systemet visar sammanfattning

Användaren klickar "Finish Booking"

Systemet visar tack-sida

Alternate Flow:

Om inga platser är valda visas felmeddelande

Postconditions:

Bokning är slutförd

Användaren får bekräftelse

🏗 UML

Projektet innehåller:

Klassdiagram

Sekvensdiagram

(Se /docs mappen)

🤖 AI-användning

AI användes för:

Generering av grundstruktur för HTML/CSS

Förslag på UML-diagram

Hjälp med JavaScript-logik

All kod har granskats och anpassats manuellt.

🚀 Hur man kör projektet

Klona repot

Öppna ui/index.html i webbläsare

Följ bokningsflödet

Ingen installation krävs.

🔄 Change Log

Lade till confirm-sida för bättre flöde

Lade till tack-sida efter slutförd bokning
 168e6e7 (initial commit - final project)
