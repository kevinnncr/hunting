import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimsModule } from './prims/prims.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrimsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
