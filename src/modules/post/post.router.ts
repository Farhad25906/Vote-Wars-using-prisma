import { Router } from "express";
import { PollController } from "./post.controller";

const pollRouter = Router();
const pollController = new PollController();

pollRouter.post("/", pollController.createPoll);
pollRouter.get("/", pollController.getPolls);


export default pollRouter;