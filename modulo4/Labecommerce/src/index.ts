import { AddressInfo } from "net";
import app from "./app";
import { createProducts } from "./endpoints/createProducts";
import { createPurchases } from "./endpoints/createPurchases";
import { createUser } from "./endpoints/createUser";
import { getProducts } from "./endpoints/getProducts";
import { getPurchases } from "./endpoints/getPurchases";
import { getUsers } from "./endpoints/getUser";

app.post("/user", createUser)
app.get("/users", getUsers)
app.post("/products", createProducts)
app.get("/products", getProducts)
app.post("/purchases", createPurchases)
app.get("/users/:user_id/purchases", getPurchases)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});