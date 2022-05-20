import { Module } from '@nestjs/common';
import { PackagesController } from '../controllers/Packages.controller';
import { PackagesByClientController } from '../controllers/PackagesByClientController.controller';
import { InsuranceProvider } from '../providers/insurance.provider';
import { PackagesRepository } from '../repositories/Packages.repository';
import { PackagesByClientRepository } from '../repositories/PackagesByClient.repository';
import { InsuranceService } from '../services/Insurance.service';
import { PackagesService } from '../services/Packages.service';
import { PackagesByClientService } from '../services/PackagesByClient.service';
import { InsurancesModule } from './Insurances.module';
import { ShowsModule } from './Shows.module';

@Module({
  imports: [InsurancesModule, ShowsModule],
  controllers: [PackagesByClientController, PackagesController],
  providers: [
    PackagesByClientService,
    PackagesByClientRepository,
    PackagesService,
    PackagesRepository,
  ],
})
export class PackagesModule {}
