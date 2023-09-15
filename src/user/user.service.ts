import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';
import { PrismaClient, people } from '@prisma/client';
import { hash } from 'bcrypt';

export type User = CreateUserDto;

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaClient) {}

  async create(createUserDto: CreateUserDto) {
    const passwordHash = await hash(createUserDto.password, 10);
    const user = await this.prismaService.people.create({
      data: {
        name: createUserDto.nome,
        email: createUserDto.email,
        password: passwordHash,
      },
    });
  }

  async findAll() {
    return this.prismaService.people.findMany({
      select: {
        role: true,
        id: true,
        name: true,
        email: true,
        profissao: true,
        nacionalidade: true,
        nascimento: true,
        sexo: true,
        peso: true,
        altura: true,
        createdAt: true,
        password: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    const user = await this.prismaService.people.findFirst({
      where: { email },
    });

    return user;
  }

  async findOne(id: string) {
    const user = await this.prismaService.people.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (!user) throw new NotFoundException('Usuario não encontrado!');
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return this.prismaService.people.update({
      where: { id },
      data: updateUserInput,
    });
  }
  async remove(id: string) {
    return this.prismaService.people.delete({
      where: { id },
    });
  }
}
