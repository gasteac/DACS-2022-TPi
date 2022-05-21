import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentDto } from 'src/sales/dtos/payment.dto';
import { PackagesByClientDto } from '../dtos/PackageByClient.dto';
import { PackagesByClientService } from '../services/PackagesByClient.service';

@Controller('/packagesByClient')
export class PackagesByClientController {
  constructor(private readonly packageService: PackagesByClientService) {}

  // @Get('/buyed')
  // getBuyedPackages(): string {
  //   // Mientras tanto vamos a utilizar un id de un cliente en específico,
  //   // luego este id lo vamos a obtener del token de autenticación
  //   const req = { clientId: 1 };
  //   return this.packageService.getPackagesBuyedByCostumer(req.clientId);
  // }

  @Post('/')
  createPackagesByClient(@Body() packagesByClient: PackagesByClientDto) {
    return this.packageService.create(packagesByClient);
  }
}
