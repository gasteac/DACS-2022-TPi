import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PackagesService } from '../services/Packages.service';
import { PackagesByClientService } from '../services/PackagesByClient.service';

@Controller('/packages')
export class PackagesController {
  constructor(private readonly packageService: PackagesService) {}

  @Delete('/:packageId')
  deletePackageById(@Param('packageId') packageId: number): string {
    return this.packageService.deletePackageById(packageId);
  }

  @Post("/")
  CreatePackage(@Body() tourismPackage:any){
    return this.packageService.createPackage(tourismPackage)
  }
}
