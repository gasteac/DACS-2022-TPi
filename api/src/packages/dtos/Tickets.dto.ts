import { Type } from 'class-transformer';
import { IsDate, IsNumber } from 'class-validator';

export class TicketDto {
  @IsNumber()
  seat: number;

  @IsDate()
  @Type(() => Date)
  departureDate: Date;

  @IsDate()
  @Type(() => Date)
  returnDate: Date;

  @IsNumber()
  travelWayId: number;

  @IsNumber()
  amount: number;
}
