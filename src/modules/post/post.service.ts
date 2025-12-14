

import { Option, Poll } from "@prisma/client";
import prisma from "../../prisma/prisma";

export class PollService {
  async createPoll(data: Poll & { options: Option }) {
    const { title, creatorId, options } = data;
    const optionsArray = Array.isArray(options) ? options : [];
    await prisma.poll.create({
      data: {
        title,
        creatorId,
        options: {
          create: optionsArray.map((text) => ({ text })),
        },
      },
      include: { options: true },
    });
  }
  async getPolls() {
    return await prisma.poll.findMany({
      include: { creator: true, options: true },
      orderBy: { createdAT: "desc" },
    });
  }
}
