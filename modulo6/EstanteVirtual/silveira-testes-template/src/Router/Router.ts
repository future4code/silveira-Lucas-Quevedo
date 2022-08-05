import express  from "express";
import { CompetitionController } from "../controller/CompetitionController";


export const Router = express.Router()

Router.post("/createCompetition", new CompetitionController().createCompetition)
Router.post("/getId", new CompetitionController().putCompetitionId)