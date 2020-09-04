const express = require("express");
const app = express();
const port = 3000;

app.get("/", (rq, res) => {
    res.send(console.log("Hello express"))
});

app.listen(port, console.log(`Listening on port ${port}`))