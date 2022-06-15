import { app } from "./app";
import { getAllUsers } from "./endpoints/Exercicio1";
import { getTypeUsers } from "./endpoints/Exercicio2";
import { getLimitUsers } from "./endpoints/Exercicio3";

app.get("/recipes", getAllUsers)
app.get("/type",getTypeUsers)
app.get("/limit", getLimitUsers)
app.get("/user")