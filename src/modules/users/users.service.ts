import { Prisma, PrismaClient, User } from "@prisma/client";


const prisma = new PrismaClient();
export class UserService {
  async createUser(data: Prisma.UserCreateInput) {
    return await prisma.user.create({ data });
  }
  async getUsers() {
    return await prisma.user.findMany({ orderBy: { id: "asc" } });
  }
  async getUserById(id: number) {
    return await prisma.user.findUnique({ where: { id } });
  }
  async updateUser(id: number, data: Partial<User>) {
    return await prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number) {
    return await prisma.user.delete({ where: { id } });
  }
}
