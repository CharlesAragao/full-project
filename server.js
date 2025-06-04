// import dotenv from "dotenv/config";
// import env from 'dotenv';
// import app from "./src/app.js";

// env.config();
// const port = process.env.PORT || 3300;

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });


import "dotenv/config";
import app from "./src/app.js";

const host = "localhost"
const port = process.env.PORT || 3300;

app.listen(port, () => {
    console.log(`Servidor rodando: http://${host}:${port}`);
});