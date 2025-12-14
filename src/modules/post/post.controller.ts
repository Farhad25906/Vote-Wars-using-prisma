import { Request, Response } from "express";
import { PollService } from "./post.service";

const pollService = new PollService();
export class PollController {
  async createPoll(req: Request, res: Response) {
    const poll = await pollService.createPoll(req.body);
    res.send({
      message: "Success",
      data: poll,
    });
  }

  async getPolls(req: Request, res: Response) {
    const poll = await pollService.getPolls();
    res.send({
      message: "Success",
      data: poll,
    });
  }
}
