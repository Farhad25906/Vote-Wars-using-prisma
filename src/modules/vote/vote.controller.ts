import { Request, Response } from "express";
import { VoteService } from "./vote.service";

const voteService = new VoteService();

export class VoteController {
  async castVote(req: Request, res: Response) {
    try {
      const { userId, optionId } = req.body;
      const data = await voteService.castVote(userId, optionId);
      res.status(201).json({ message: "Vote Given", data: data });
    } catch (error) {
      res.status(400).json({ message: err.message, err });
    }
  }

  async getPollResult(req: Request, res: Response) {
    try {
      const data = await voteService.getPollResult(Number(req.params.pollId));
      res.send({ message: "success", data });
    } catch (error) {
      res.send({ message: "error", error });
    }
  }

  async getPollWinner(req: Request, res: Response) {
    try {
      const data = await voteService.getPollWinner(Number(req.params.pollId));
      res.send({ message: "success", data });
    } catch (error) {
      res.send({ message: "error", error });
    }
  }


}
