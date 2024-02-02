const http = require("http");
const express = require("express");
const aplicacao = express();
const funcionalidadesIO = require("socket.io");

const servidorHttp = http.createServer(aplicacao);
const io = funcionalidadesIO(servidorHttp);

aplicacao.use(express.static("public"));

function alguemEntrouNaSala() {
    console.log("Alguém entrou na sala");
}



io.addListener("connection");
servidorHttp.listen(1000);