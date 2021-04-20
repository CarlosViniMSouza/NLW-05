import express, { request, response } from "express";

const app = express()

app.listen(3090, () => console.log("App running with sucess ✌️"))

/*
    Metodos de busca:
    ° 1 -> GET : Busca informação
    ° 2 -> POST : Cria informação
    ° 3 -> PUT : Altera informação
    ° 4 -> DELETE : Deleta informação
    ° 5 -> PATCH : Altera informação ESPECÍFICA
*/

app.get("/", (request, response) => {
    return response.send("Oi Gente do NLW#05")
});

/*
    O código abaixo não funciona, será necessário utilizar outro
programa para poder usar o método POST, por exemplo :

    ° insomnia : https://insomnia.rest/
    ° postman : https://www.postman.com/

app.post("/msg", (request, response) => {
    return response.json({
        message : "Rota inativa por enquanto"
    })
});
*/