import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

app.post("/user", async(req:Request, res:Response)=>{
    try {
        await connection.raw(`
        INSERT INTO ToDoList(id, name, nickname, email)
        VALUES(
            "${Date.now().toString}",
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
        )
        `)
        res.status(201).send("Usuário criado com sucesso!")
    } catch (error:any) {
        res.status(500).send(error.sqlMessage)
    }
})