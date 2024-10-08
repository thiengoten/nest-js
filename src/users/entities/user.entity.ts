import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { BudgetEntity } from 'src/budget/entities/budget.entity';
import { Exclude } from 'class-transformer';
export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @Exclude()
  password: string;

  // budget: BudgetEntity[];
}
