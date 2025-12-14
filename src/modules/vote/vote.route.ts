import { Router } from "express";
import { VoteController } from "./vote.controller";

const voteRouter = Router();
const voteController = new VoteController();

voteRouter.post("/", voteController.castVote);
voteRouter.get("/result/:pollId", voteController.getPollResult);
voteRouter.get("/winner/:pollId", voteController.getPollWinner);

export default voteRouter;
