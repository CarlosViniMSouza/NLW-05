import { http } from "./http";
import "./websocket/client";

http.listen(3090, () => console.log("App running with sucess ✌️"))

/*
    Metodos de busca:
    ° 1 -> GET : Busca informação
    ° 2 -> POST : Cria informação
    ° 3 -> PUT : Altera informação
    ° 4 -> DELETE : Deleta informação
    ° 5 -> PATCH : Altera informação ESPECÍFICA
*/