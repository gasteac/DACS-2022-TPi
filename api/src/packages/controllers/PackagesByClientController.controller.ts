import { Controller, Get, Request } from '@nestjs/common';
import { PackagesByClientService } from '../services/PackagesByClient.service';

@Controller('/packagesByClient')
export class PackagesByClientController {
  constructor(private readonly packageService: PackagesByClientService) {}

  @Get('/buyed')
  getBuyedPackages(@Request() req): string {
    return this.packageService.getPackagesBuyedByCostumer(req.clientId);
  }
}
