import prisma from "../../prisma/prisma";

export class VoteService {
  async castVote(userId: number, optionId: number) {
    return await prisma.vote.create({
      data: {
        userId,
        optionId,
      },
    });
  }

  async getPollResult(pollId: number) {
    return await prisma.option.findMany({
      where: { pollId },
      select: {
        id: true,
        text: true,
        _count: { select: { votes: true } },
      },
      orderBy:{
        votes:{_count:"desc"}
      }
    });
  }

   async getPollWinner(pollId: number) {
    return await prisma.option.findMany({
      where: { pollId },
      select: {
        id: true,
        text: true,
        _count: { select: { votes: true } },
      },
      orderBy: {
        votes: { _count: "desc" },
      },
      take: 1,
    });
  }
}
