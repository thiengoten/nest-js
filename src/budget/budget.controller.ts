import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BudgetEntity } from 'src/budget/entities/budget.entity';

@Controller('budget')
@ApiTags('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  @ApiCreatedResponse({
    type: BudgetEntity,
  })
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  @ApiOkResponse({
    type: BudgetEntity,
    isArray: true,
  })
  findAll() {
    return this.budgetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.budgetService.findOne(id);
    if (!data) {
      throw new NotFoundException(`Budget id ${id}`);
    }
    return data;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(id);
  }
}
