import { Injectable, Inject, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Hotel } from '../entitities/hotel.entity';
import { Insurance } from '../entitities/insurances.entity';
import { Pack } from '../entitities/packages.entity';
import { Show } from '../entitities/shows.entity';
import { Ticket } from '../entitities/tickets.entity';
import { TravelWay } from '../entitities/travelWays.entity';
import { PackagesRepository } from '../repositories/Packages.repository';
import { HotelService } from './Hotel.service';
import { InsuranceService } from './Insurance.service';
import { ShowsService } from './Shows.service';
import { TicketService } from './Ticket.service';

@Injectable()
export class PackagesService {
  constructor(
    @Inject('PACK_REPOSITORY') private packagesRepository: typeof Pack,
    private insuranceService: InsuranceService,
    private ticketService: TicketService,
    private hotelService: HotelService,
    private showService: ShowsService,
  ) {}

  async findAll(): Promise<Pack[]> {
    return await this.packagesRepository.findAll({
      include: [
        Insurance,
        { model: Ticket, include: [TravelWay] },
        Hotel,
        Show,
      ],
    });
  }

  async create(pack: any): Promise<Pack> {
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
    const newPack = new Pack({ ...pack, total });
    await newPack.save();
    return newPack;
  }
  async delete(id: number): Promise<Pack> {
    const pack = await this.packagesRepository.findOne({ where: { id } });
    if (!pack) {
      throw new NotFoundException('Pack does not exist');
    }
    await pack.destroy();
    return pack;
  }

  async findOne(id: number): Promise<Pack> {
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
