const express = require("express");
const app = express();
const port = 3000;

app.get("/api/timestamp/", (rq, res) => {
    res.json({"unix": Date.now(), "utc": Date()});
});

app.listen(port, console.log(`Listening on port ${port}`))