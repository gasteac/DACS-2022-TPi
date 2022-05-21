import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PackageDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  hotelId: number;

  @IsOptional()
  @IsNumber()
  ticketId: number;

  @IsOptional()
  @IsNumber()
  insuranceId: number;

  @IsOptional()
  @IsNumber()
  showId: number;
}
