import { Module } from '@nestjs/common';
import { SaleModule } from 'src/sales/sales.module';
import { ControlTourismModule } from 'src/tourismControl/controlTourism.module';
import { UsersModule } from 'src/users/users.module';
import { PackagesController } from '../controllers/Packages.controller';
import { ReservedPackagesController } from '../controllers/ReservedPackages.controller';
import { InsuranceProvider } from '../providers/insurance.provider';
import { PackageProvider } from '../providers/package.provider';
import { ReservedPackagesProvider as ReservedPackagesProvider } from '../providers/reservedPackages.provider';
import { PackagesRepository } from '../repositories/Packages.repository';
import { PackagesByClientRepository } from '../repositories/PackagesByClient.repository';
import { InsuranceService } from '../services/Insurance.service';
import { PackagesService } from '../services/Packages.service';
import { ReservedPackagesService } from '../services/ReservedPackages.service';
import { HotelsModule } from './Hotels.module';
import { InsurancesModule } from './Insurances.module';
import { ShowsModule } from './Shows.module';
import { TicketsModule } from './Tickets.module';

@Module({
  imports: [
    InsurancesModule,
    ShowsModule,
    HotelsModule,
    TicketsModule,
    UsersModule,
  ],
  controllers: [ReservedPackagesController, PackagesController],
  providers: [
    ReservedPackagesService,
    PackagesService,
    ...PackageProvider,
    ...ReservedPackagesProvider,
  ],
  exports: [ReservedPackagesService, PackagesService],
})
export class PackagesModule {}
