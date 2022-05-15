import { Injectable } from '@nestjs/common';
import { PackagesByClientRepository } from '../repositories/PackagesByClient';

@Injectable()
export class PackagesByClientService {
  constructor(private packagesByClientRepository: PackagesByClientRepository) {}

  getPackagesBuyedByCostumer(clientId: number): any {
    return this.packagesByClientRepository.findAll({
      where: { clientId, buyed: true },
    });
  }
}
