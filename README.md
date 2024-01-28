# Notes: Använder Node och Mysql för databas.

# Hur man konfiguerar:
Backend:
- kör sql skriptet från filen NTS_SQL_Insert.sql som ligger i backend mappen, detta skapar upp en databas som heter 'nts' i MySql med lite data i. 
- I filen 'db.js' så finns 'user' och 'password' för att konnekta till MySql , detta lär du behöva ändra till ditt egna på rad 7 och 8 i filen (db.js). 

Frontend: 
- i filen script.js så finns det en URL för apiet som är localhost med port 3000, ändra om det behövs.

# STARTA PROJEKTET:
Kör commandot ```npm i```

Starta backend:

 - genom att skriva: ```cd backend``` och sedan ```node app.js```
   
Starta frontend:

 - genom att öppna login.html sidan.

