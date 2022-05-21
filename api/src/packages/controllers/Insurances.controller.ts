import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
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
}
