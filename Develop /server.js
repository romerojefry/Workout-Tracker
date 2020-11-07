//dependcies
const express = require("express");
const mongoose = require("mongoose");

const PORT= process.env.PORT || 3000;
const app = express();




//routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});