# AI_LOG

## Prompt 1
**Prompt:** “Ge mig en enkel semantisk HTML-struktur för en bokningsprototyp med 2–4 sidor.”  
**AI gav:** Förslag på sidstruktur, header/main och navigationsflöde.  
**Jag ändrade manuellt:** Anpassade till mitt scenario (Lakers vs Chicago) och la till `confirm.html` + `thanks.html`.

## Prompt 2
**Prompt:** “Skapa en seat map layout i CSS som känns som arena (två sidor) och en center-panel.”  
**AI gav:** En grid-idé och panel-layout.  
**Jag ändrade manuellt:** Gjorde tydlig split (gul/röd), lade in center-court och förbättrade spacing/kontrast.

## Prompt 3
**Prompt:** “Minimal JS som togglar seats och sparar val till nästa sida.”  
**AI gav:** Toggle-logik och en enkel save/redirect.  
**Jag ändrade manuellt:** Säkrade att booked seats inte går att klicka, la till summary-lista, localStorage keys (`bookingData`, `lastBooking`) och redirect-flöde.

## Reflection
AI hjälpte mig att snabbt få en grund, men jag behövde förenkla och anpassa för kurskraven (Use Case → UI → UML).  
Jag lärde mig att UI-flöde blir mycket tydligare när man har en riktig “confirm” och “thanks” sida, även i en prototyp utan backend.