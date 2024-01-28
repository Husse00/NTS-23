const express = require('express');
const cors = require('cors');

const db = require("./db");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors());

// Signin api route, email och lösenord krävs
app.post("/SignIn", async (req, res) => {

    let body = req.body;
    let email = body.email;
    let password = body.password;

    if (email != null && password != null) {

        let login = await db.SignIn(email, password);

        if (login == true) {
            // Ok 200
            res.status(200);
            res.json({ "success": 1 });
        }
        else {
            // 401 användaren hittades inte
            res.status(401);
            res.json();
        }
    }
    else {
        // 400, inget email / password
        res.status(400);
        res.json();
    }
});

// Signup api route, email och lösenord krävs
app.post("/SignUp", async (req, res) => {

    let body = req.body;
    let email = body.email;
    let password = body.password;

    if (email != null && password != null) {

        let signup = await db.SignUp(email, password);

        if (signup == true) {
            // Ok 200
            res.status(200);
            res.json({ "success": 1 });
        }
        else {
            // Något gick fel
            res.status(500);
            res.json();
        }
    }
    else {
        // 400, inget email / password
        res.status(400);
        res.json();
    }
});

// Route för att skapa dokument, namn och beskrivning krävs
app.post("/CreateDocument", async (req, res) => {

    let body = req.body;

    let name = body.name;
    let description = body.description;

    let id = await db.CreateDocument(name, description);

    if (id != null) {
        // Ok
        res.status(200);
        res.json({ id: id });
    }
    else {
        // ej ok
        res.status(500);
        res.json();
    }
});

// Route för att hämta alla dokument
app.get("/GetDocuments", async (req, res) => {

    let documents = await db.GetDocuments();

    if (documents != null) {
        res.status(200);
        res.json({ documents });
    }
    else {
        res.status(500);
        res.json();
    }
});

// Route för att hämta specifikt dokument med dess ID
app.get("/GetDocument/:id", async (req, res) => {

    let id = req.params.id;

    let document = await db.GetDocument(id);

    if (document != null) {
        res.status(200);
        res.json({ document: document[0] });
    }
    else {
        res.status(500);
        res.json();
    }
});

// Route för att uppdatera dokument med ID
app.post("/UpdateDocument/:id", async (req, res) => {

    let body = req.body;

    let documentId = req.params.id;
    let document = body.document;

    if (documentId != null && document != null) {
        let updateSucces = await db.UpdateDocument(documentId, document);

        if (updateSucces == 1) {
            res.status(200);
            res.json();
        } else {
            res.status(500);
            res.json();
        }
    } else {
        res.status(400);
        res.json();
    }
})


app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
); 