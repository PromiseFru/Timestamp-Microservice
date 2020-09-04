const express = require("express");
const app = express();
const port = 3000;

app.get("/api/timestamp/", (rq, res) => {
    res.json({"unix": Date.now(), "utc": Date()});
});

app.get("/api/timestamp/:date_string", (req, res) => {
    let dateString = req.params.date_string;

    if(/\d{5,}/.test(dateString)){
        var dateInt = parseInt(dateString);
        res.json({"unix": dateString, "utc": new Date(dateInt).toUTCString()})
    }
})

app.listen(port, console.log(`Listening on port ${port}`))