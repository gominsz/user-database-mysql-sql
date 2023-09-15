import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UserController],
  imports: [PrismaModule],
  providers: [UserService, PrismaClient],
})
export class UserModule {}
