import { IsNumber, IsString } from 'class-validator';

export class HotelDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  phone: number;
}
