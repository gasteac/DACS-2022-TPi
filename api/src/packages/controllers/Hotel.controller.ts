import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { HotelDto, HotelOnUpdateDto } from '../dtos/Hotel.dto';
import { HotelService } from '../services/Hotel.service';

@Controller('hotels')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Get('/')
  async findAllHotels() {
    return await this.hotelService.findAll();
  }

  @Get('/:idHotel')
  async findHotelById(@Param('idHotel') id: number) {
    return await this.hotelService.findOne(id);
  }

  @Delete('/:idHotel')
  async deleteHotel(@Param('idHotel') id: number) {
    return await this.hotelService.delete(id);
  }

  @Post('/')
  async createHotel(@Body() hotel: HotelDto) {
    return await this.hotelService.create(hotel);
  }

  @Patch('/:id')
  updateHotel(@Body() hotel: HotelOnUpdateDto, @Param('id') id: number) {
    return this.hotelService.update(id, hotel);
  }


}
