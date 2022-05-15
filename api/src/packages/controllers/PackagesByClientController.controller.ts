import { Controller, Get } from '@nestjs/common';
import { PackagesByClientService } from '../services/PackagesByClient.service';

@Controller('/packagesByClient')
export class PackagesByClientController {
  constructor(private readonly packageService: PackagesByClientService) {}

  @Get('/buyed')
  getBuyedPackages(): string {
    // Mientras tanto vamos a utilizar un id de un cliente en específico, luego este id lo vamos a obtener del token de autenticación
    const req = { clientId: 1 };
    return this.packageService.getPackagesBuyedByCostumer(req.clientId);
  }
}
