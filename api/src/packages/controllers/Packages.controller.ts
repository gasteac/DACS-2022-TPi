import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PackageDto } from '../dtos/Package.dto';
import { PackagesService } from '../services/Packages.service';
import { ReservedPackagesService } from '../services/ReservedPackages.service';

@Controller('/packages')
export class PackagesController {
  constructor(private readonly packageService: PackagesService) {}

  // @Delete('/:packageId')
  // deletePackageById(@Param('packageId') packageId: number): string {
  //   return this.packageService.deletePackageById(packageId);
  // }

  // @Post('/')
  // CreatePackage(@Body() tourismPackage: any) {
  //   return this.packageService.createPackage(tourismPackage);
  // }

  // @Post('/insurances')
  // createInsurance(@Body() insurance: any) {
  //   return this.packageService.createInsurance(insurance);
  // }
  @Get()
  getAllPackages() {
    return this.packageService.findAll();
  }

  @Post()
  createPackage(@Body() tourismPackage: PackageDto) {
    return this.packageService.create(tourismPackage);
  }

  @Delete('/:packageId')
  deletePackageById(@Param('packageId') packageId: number) {
    return this.packageService.delete(packageId);
  }
}
