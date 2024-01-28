# Notes: Använder Node och Mysql för databas.

# Hur man konfiguerar:
Backend:
- kör sql skriptet från filen NTS_SQL_Insert.sql som ligger i backend mappen, detta skapar upp en databas som heter 'nts' i MySql med lite data i. 
- I filen 'db.js' så finns 'user' som är ''root''  och 'password' som är ''123'' för att konnekta till MySql , om du vill kan du ändra detta och mer till ditt egna på rad 6 till 11 i filen (db.js). 

Frontend: 
- i filen script.js så finns det en URL för apiet som är localhost med port 3000, ändra om det behövs.

# STARTA PROJEKTET:
Kör commandot ```npm i```

Starta backend:

 - genom att skriva: ```cd backend``` och sedan ```node app.js```
   
Starta frontend:

 - genom att öppna login.html sidan i mappen 'frontend'.

