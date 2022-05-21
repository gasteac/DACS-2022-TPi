import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class ShowDto {
  @IsString()
  name: string;

  @IsNumber()
  seat: number;

  @IsNumber()
  amount: number;

  @IsDate()
  @Type(() => Date)
  dateShow: Date;
}
