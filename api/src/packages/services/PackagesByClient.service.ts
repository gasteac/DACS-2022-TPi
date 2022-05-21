import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SalesService } from 'src/sales/services/sales.service';
import { ControlTourismService } from 'src/tourismControl/services/controlTourism.service';
import { UserService } from 'src/users/services/users.service';
import { PackagesByClientDto } from '../dtos/PackageByClient.dto';
import { PackagesByClientRepository } from '../repositories/PackagesByClient.repository';
import { PackagesService } from './Packages.service';

@Injectable()
export class PackagesByClientService {
  constructor(
    private packagesByClientRepository: PackagesByClientRepository,
    private tourismControlService: ControlTourismService,
    private salesService: SalesService,
    private packagesService: PackagesService,
    private userService: UserService,
  ) {}

  // getPackagesBuyedByCostumer(clientId: number): any {
  //   return this.packagesByClientRepository.findAll({
  //     where: { clientId, buyed: true },
  //   });
  // }

  async create(packagesByClient: PackagesByClientDto) {
    const { userId, packageId, payment } = packagesByClient;
    const user = await this.userService.findOne(userId);
    const packageToBuy = await this.packagesService.findOne(packageId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    if (!packageToBuy) {
      throw new UnauthorizedException('The package doesnt exist');
    }
    const isValid = this.tourismControlService.validate({
      cuit: user.cuit,
      fecha_incio: new Date().toISOString(),
      fecha_fin: new Date().toISOString(),
      precio: packageToBuy.total,
    });
    if (!isValid) {
      throw new UnauthorizedException(
        'The user has not authorized to buy this package',
      );
    }
    const successPayment = this.salesService.handlePayment(
      payment,
      packageToBuy.total,
    );
    if (!successPayment) {
      throw new UnauthorizedException('Payment not valid');
    }
    return await this.salesService.create(packagesByClient, packageToBuy.total);
  }
}
