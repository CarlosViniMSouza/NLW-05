import express, { request, response } from "express";

import "./database";

import { routes } from "./routes";

const app = express()

app.use(express.json());

app.use(routes);

app.listen(3090, () => console.log("App running with sucess ✌️"))

/*
    Metodos de busca:
    ° 1 -> GET : Busca informação
    ° 2 -> POST : Cria informação
    ° 3 -> PUT : Altera informação
    ° 4 -> DELETE : Deleta informação
    ° 5 -> PATCH : Altera informação ESPECÍFICA
*/