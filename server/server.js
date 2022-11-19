const express = require('express');
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userFour"]})
});

app.listen(1025, () => {console.log("Server started on port 1025")})