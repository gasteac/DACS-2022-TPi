import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { HotelDto } from '../dtos/Hotel.dto';
import { HotelService } from '../services/Hotel.service';

@Controller('hotels')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Get('/')
  async findAllHotels() {
    return await this.hotelService.findAll();
  }

  @Delete('/:idHotel')
  async deleteHotel(@Param('idHotel') id: number) {
    return await this.hotelService.delete(id);
  }

  @Post('/')
  async createHotel(@Body() hotel: HotelDto) {
    return await this.hotelService.create(hotel);
  }
}
