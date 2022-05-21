import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { HotelDto } from '../dtos/Hotel.dto';
import { Hotel } from '../entitities/hotel.entity';

@Injectable()
export class HotelService {
  constructor(
    @Inject('HOTEL_REPOSITORY')
    private hotelRepository: typeof Hotel,
  ) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelRepository.findAll();
  }

  async findOne(id: number): Promise<Hotel> {
    return await this.hotelRepository.findOne({
      where: { id },
    });
  }

  async create(hotel: HotelDto): Promise<Hotel> {
    const newHotel = new Hotel({ ...hotel });
    await newHotel.save();
    return newHotel;
  }

  async delete(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({
      where: { id },
    });
    if (!hotel) {
      throw new NotFoundException('Hotel not found');
    }
    await hotel.destroy();
    return hotel;
  }
}
