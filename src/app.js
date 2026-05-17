const express = require('express');
const router = require("./public/router/rutas");

const app = express();
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
    console.log('a la escucha del ', port)
})