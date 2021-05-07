import express from "express";
const app = express();

app.get('/', (_request, response) => {
    response.send("Hello, World!");
});

app.listen(5000, () => {console.log("App running on port 5000")});