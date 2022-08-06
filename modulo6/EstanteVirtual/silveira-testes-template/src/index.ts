import express, { Express, Router } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { CompetitionController } from "./controller/CompetitionController";
import { AthleteController } from "./controller/AthleteController";
import { RegistrationController } from "./controller/RegistrationController";



const app: Express = express();
app.use(express.json());
app.use(cors());

// app.use("/users", Router);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.post("/createCompetition", new CompetitionController().createCompetition)
app.post("/createAthlete", new AthleteController().createAthlete)
app.post("/resgitration", new RegistrationController().resultCompetition)
app.get("/result", new RegistrationController().getResult)
app.put("/getCompetition", new CompetitionController().putCompetitionId)
