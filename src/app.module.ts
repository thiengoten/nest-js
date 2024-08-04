import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [PrismaModule, BudgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
