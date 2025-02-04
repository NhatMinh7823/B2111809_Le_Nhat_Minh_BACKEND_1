const express = require("express");
const contactsRouter = require("./app/routes/contact.route"); // Import the router
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter); // Register the contacts route

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
