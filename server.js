const express = require('express');
const path = require('path');
const controller = require("./server/controller/controller");
const app = express();

PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${(PORT)}`)
});

// log request
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));