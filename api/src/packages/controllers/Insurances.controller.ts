import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { InsuranceOnUpdateDto } from '../dtos/InsuranceOnUpdate.dto';
import { InsuranceDto } from '../dtos/Insurances.dto';
import { InsuranceService } from '../services/Insurance.service';

@Controller('insurances')
export class InsurancesController {
  constructor(private insuranceService: InsuranceService) {}

  @Delete('/:insuranceId')
  deleteInsuranceById(@Param('insuranceId') insuranceId: number) {
    return this.insuranceService.delete(insuranceId);
  }

  @Post('/')
  createInsurance(@Body() insurance: InsuranceDto) {
    return this.insuranceService.create(insurance);
  }

  @Get('/')
  findAllInsurances() {
    return this.insuranceService.findAll();
  }

  @Get('/:insuranceId')
  findInsuranceById(@Param('insuranceId') insuranceId: number) {
    return this.insuranceService.findOne(insuranceId);
  }

  @Patch('/:id')
  updateInsurance(@Body() insurance: InsuranceOnUpdateDto, @Param('id') id: number) {
    return this.insuranceService.update(id, insurance);
  }
}
