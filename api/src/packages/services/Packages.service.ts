import { Injectable } from '@nestjs/common';
import { Insurance } from '../entitities/insurances.entity';
import { PackagesRepository } from '../repositories/Packages.repository';
import { InsuranceService } from './Insurance.service';

@Injectable()
export class PackagesService {
  // constructor(private insuranceService: InsuranceService) {}

  // deletePackageById(packageId: number): string {
  //   return this.packagesRepository.delete({ where: { packageId } });
  // }
  // createPackage(tourismPackage: any): string {
  //   return this.packagesRepository.create(tourismPackage);
  // }

  // createInsurance(insurance: any): Promise<Insurance> {
  //   return this.insuranceService.create(insurance);
  // }
}
