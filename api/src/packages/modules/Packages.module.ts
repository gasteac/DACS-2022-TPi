import { Module } from '@nestjs/common';
import { PackagesController } from '../controllers/Packages.controller';
import { PackagesByClientController } from '../controllers/PackagesByClientController.controller';
import { PackagesRepository } from '../repositories/Packages.repository';
import { PackagesByClientRepository } from '../repositories/PackagesByClient.repository';
import { PackagesService } from '../services/Packages.service';
import { PackagesByClientService } from '../services/PackagesByClient.service';

@Module({
  imports: [],
  controllers: [PackagesByClientController, PackagesController],
  providers: [
    PackagesByClientService,
    PackagesByClientRepository,
    PackagesService,
    PackagesRepository,
  ],
})
export class PackagesModule {}
