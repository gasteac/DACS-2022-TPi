import { Injectable } from '@nestjs/common';
import { PackagesRepository } from '../repositories/Packages.repository';

@Injectable()
export class PackagesService {
  constructor(private packagesRepository: PackagesRepository) {}

  deletePackageById(packageId: number): string {
    return this.packagesRepository.delete({ where: { packageId } });
  }
  createPackage(tourismPackage:any):string{
    return this.packagesRepository.create(tourismPackage);
  }
}
