require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn")
const users = require("./models/userSchema");

const cors = require("cors");
const router = require("./routes/router")

const port = process.env.PORT || 8003;
app.use(cors());
app.use(express.json());
app.use(router);
// username :- alok99893
// password:- 4muOTRgeakXtb2m6
// const DB = "mongodb+srv://alok99893:4muOTRgeakXtb2m6@cluster0.u7zfx7p.mongodb.net/?retryWrites=true&w=majority";

app.listen(port , () => {
    console.log(`server is start port number ${port}`);
});
