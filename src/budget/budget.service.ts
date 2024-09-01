import { Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BudgetService {
  constructor(private prisma: PrismaService) {}
  create(createBudgetDto: CreateBudgetDto) {
    return this.prisma.budget.create({
      data: createBudgetDto,
    });
  }

  findAll() {
    return this.prisma.budget.findMany();
  }

  findOne(id: string) {
    return this.prisma.budget.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            createdAt: true,
          },
        },
      },
    });
  }

  update(id: string, updateBudgetDto: UpdateBudgetDto) {
    return this.prisma.budget.update({
      where: { id },
      data: updateBudgetDto,
    });
  }

  remove(id: string) {
    return this.prisma.budget.delete({
      where: { id },
    });
  }
}
