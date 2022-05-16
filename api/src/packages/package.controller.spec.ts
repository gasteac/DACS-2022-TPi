import { Test, TestingModule } from '@nestjs/testing';
import { PackagesByClientController } from './controllers/PackagesByClientController.controller';
import { PackagesByClientRepository } from './repositories/PackagesByClient.repository';
import { PackagesByClientService } from './services/PackagesByClient.service';

describe('AppController', () => {
  let packageController: PackagesByClientController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PackagesByClientController],
      providers: [PackagesByClientRepository, PackagesByClientService],
    }).compile();

    packageController = app.get<PackagesByClientController>(
      PackagesByClientController,
    );
  });

  describe('root', () => {
    it('should return an Array!"', () => {
      expect(packageController.getBuyedPackages(1));
    });
  });
});
