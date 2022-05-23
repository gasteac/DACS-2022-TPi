import { Injectable, Inject, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Hotel } from '../entitities/hotel.entity';
import { Insurance } from '../entitities/insurances.entity';
import { Package } from '../entitities/packages.entity';
import { Show } from '../entitities/shows.entity';
import { Ticket } from '../entitities/tickets.entity';
import { TravelWay } from '../entitities/travelWays.entity';
import { HotelService } from './Hotel.service';
import { InsuranceService } from './Insurance.service';
import { ShowsService } from './Shows.service';
import { TicketService } from './Ticket.service';

@Injectable()
export class PackagesService {
  constructor(
    @Inject('PACKAGE_REPOSITORY') private packagesRepository: typeof Package,
    private insuranceService: InsuranceService,
    private ticketService: TicketService,
    private hotelService: HotelService,
    private showService: ShowsService,
  ) {}



  async findAll(): Promise<Package[]> {
    return await this.packagesRepository.findAll({
      include: [
        Insurance,
        { model: Ticket, include: [TravelWay] },
        Hotel,
        Show,
      ],
    });
  }

  async create(pack: any): Promise<Package> {
    const { insuranceId, ticketId, hotelId, showId } = pack;
    let total = 0;
    if (insuranceId) {
      const insurance = await this.insuranceService.findOne(insuranceId);
      total += insurance.amount;
      if (!insurance) {
        throw new UnauthorizedException('Invalid insurance');
      }
    }
    if (ticketId) {
      const ticket = await this.ticketService.findOne(ticketId);
      total += ticket.amount;
      if (!ticket) {
        throw new UnauthorizedException('Invalid ticket');
      }
    }
    if (hotelId) {
      const hotel = await this.hotelService.findOne(hotelId);
      if (!hotel) {
        throw new UnauthorizedException('Invalid hotel');
      }
    }
    if (showId) {
      const show = await this.showService.findOne(showId);
      total += show.amount;
      if (!show) {
        throw new UnauthorizedException('Invalid show');
      }
    }
    const newPack = await this.packagesRepository.create({ ...pack, total });
    await newPack.save();
    return newPack;
  }
  async delete(id: number): Promise<Package> {
    const pack = await this.packagesRepository.findOne({ where: { id } });
    if (!pack) {
      throw new NotFoundException('Package does not exist');
    }
    await pack.destroy();
    return pack;
  }

  async findOne(id: number): Promise<Package> {
    return await this.packagesRepository.findOne({
      where: { id },
      include: [
        Insurance,
        { model: Ticket, include: [TravelWay] },
        Hotel,
        Show,
      ],
    });
  }

  async update(id: number, pack: any): Promise<Package> {
    const { insuranceId, ticketId, hotelId, showId } = pack;
    let total = 0;
    if (insuranceId) {
      const insurance = await this.insuranceService.findOne(insuranceId);
      total += insurance.amount;
      if (!insurance) {
        throw new UnauthorizedException('Invalid insurance');
      }
    }
    if (ticketId) {
      const ticket = await this.ticketService.findOne(ticketId);
      total += ticket.amount;
      if (!ticket) {
        throw new UnauthorizedException('Invalid ticket');
      }
    }
    if (hotelId) {
      const hotel = await this.hotelService.findOne(hotelId);
      if (!hotel) {
        throw new UnauthorizedException('Invalid hotel');
      }
    }
    if (showId) {
      const show = await this.showService.findOne(showId);
      total += show.amount;
      if (!show) {
        throw new UnauthorizedException('Invalid show');
      }
    }
    const packUpdate = await this.packagesRepository.findOne({ where: { id } });
    if (!packUpdate) {
      throw new NotFoundException('Package does not exist');
    }
    packUpdate.name = pack.name;
    packUpdate.quantPeople = pack.quantPeople;
    packUpdate.insuranceId = pack.insuranceId;
    packUpdate.ticketId = pack.ticketId;
    packUpdate.hotelId = pack.hotelId;
    packUpdate.showId = pack.showId;
    packUpdate.total = total;
    await packUpdate.save();
    return packUpdate;
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
