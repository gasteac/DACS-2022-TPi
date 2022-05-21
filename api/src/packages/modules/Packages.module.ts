import { Module } from '@nestjs/common';
import { SaleModule } from 'src/sales/sales.module';
import { UsersModule } from 'src/users/users.module';
import { PackagesController } from '../controllers/Packages.controller';
import { PackagesByClientController } from '../controllers/PackagesByClientController.controller';
import { InsuranceProvider } from '../providers/insurance.provider';
import { PackProvider } from '../providers/package.provider';
import { PackagesRepository } from '../repositories/Packages.repository';
import { PackagesByClientRepository } from '../repositories/PackagesByClient.repository';
import { InsuranceService } from '../services/Insurance.service';
import { PackagesService } from '../services/Packages.service';
import { PackagesByClientService } from '../services/PackagesByClient.service';
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
    SaleModule,
  ],
  controllers: [PackagesByClientController, PackagesController],
  providers: [
    PackagesByClientService,
    PackagesByClientRepository,
    PackagesService,
    PackagesRepository,
    ...PackProvider,
  ],
  exports: [PackagesByClientService],
})
export class PackagesModule {}
