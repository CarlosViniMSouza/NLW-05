import express, { request, response } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";
import "./database";
import { routes } from "./routes";

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pag/client", (request, response) => {
    return response.render("html/client.html");
})

const http = createServer(app); // Gerar Protocolo HTTP

const io = new Server(http); // Gerar Protocolo W.S. (WebSocket)

io.on("connection", (socket: Socket) =>{
    // console.log("Conexão feita !", socket.id)
});

app.use(express.json());

app.use(routes);

export { http, io };