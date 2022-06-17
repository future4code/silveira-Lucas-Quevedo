import { AddressInfo } from "net";
import app from "./app";
import { pegarEndereco } from "./Exercicios/Exercicio1";
import { InserirBanco } from "./Exercicios/Exercicio2";





app.get("/pegar/:cep", pegarEndereco)

app.post("/banco/:cep",InserirBanco) 

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});