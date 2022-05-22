import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Ticket } from '../entitities/tickets.entity';
import { TravelWay } from '../entitities/travelWays.entity';
import { TravelWaysService } from './TravelWays.service';

@Injectable()
export class TicketService {
  constructor(
    @Inject('TICKET_REPOSITORY')
    private ticketRepository: typeof Ticket,
    private travelWaysService: TravelWaysService,
  ) {}

  async findOne(id: number): Promise<Ticket> {
    return await this.ticketRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.findAll({ include: TravelWay });
  }

  async delete(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({ where: { id } });
    if (!ticket) {
      throw new NotFoundException('Ticket does not exist');
    }
    await this.ticketRepository.destroy({ where: { id } });
    return ticket;
  }

  async create(ticket: any): Promise<Ticket> {
    const { travelWayId } = ticket;
    const travelWays = await this.travelWaysService.findAll();
    if (!travelWayId) {
      throw new UnauthorizedException('Must be a travel way');
    }
    if (!travelWays.find((travelWay) => travelWay.id === travelWayId)) {
      throw new UnauthorizedException('Invalid travel way');
    }
    const newTicket = await this.ticketRepository.create({ ...ticket });
    await newTicket.save();
    return newTicket;
  }
}
