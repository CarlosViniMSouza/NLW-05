import { io } from "../http";

io.on("connection", (socket) => {
    socket.on("client_first_acess_web", (params) => {
        console.log(params);
    });
});