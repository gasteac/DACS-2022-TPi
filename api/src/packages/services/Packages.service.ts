import { Injectable, Inject } from '@nestjs/common';
import { Hotel } from '../entitities/hotel.entity';
import { Insurance } from '../entitities/insurances.entity';
import { Pack } from '../entitities/packages.entity';
import { Show } from '../entitities/shows.entity';
import { Ticket } from '../entitities/tickets.entity';
import { TravelWay } from '../entitities/travelWays.entity';
import { PackagesRepository } from '../repositories/Packages.repository';
import { InsuranceService } from './Insurance.service';

@Injectable()
export class PackagesService {
  constructor(
    @Inject('PACK_REPOSITORY') private packagesRepository: typeof Pack,
  ) {}

  async findAll(): Promise<Pack[]> {
    return await this.packagesRepository.findAll({
      include: [
        Insurance,
        { model: Ticket, include: [TravelWay] },
        Hotel,
        Show,
      ],
    });
  }

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
