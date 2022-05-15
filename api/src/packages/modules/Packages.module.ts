import { Module } from '@nestjs/common';
import { PackagesByClientController } from '../controllers/PackagesByClientController.controller';
import { PackagesByClientRepository } from '../repositories/PackagesByClient';
import { PackagesByClientService } from '../services/PackagesByClient.service';

@Module({
  imports: [],
  controllers: [PackagesByClientController],
  providers: [PackagesByClientService, PackagesByClientRepository],
})
export class PackagesModule {}
