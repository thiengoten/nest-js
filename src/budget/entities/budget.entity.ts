import { ApiProperty } from '@nestjs/swagger';
import { Budget } from '@prisma/client';

export class BudgetEntity implements Budget {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({
    required: false,
    nullable: true,
  })
  description: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({
    required: false,
    nullable: true,
  })
  userId: string;
}
