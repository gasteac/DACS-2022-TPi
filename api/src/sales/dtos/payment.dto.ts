import { ValidateNested } from 'class-validator';
import { CardPaymentDto } from './cardPayment.dto';

export class PaymentDto {
  @ValidateNested()
  cardPayment: CardPaymentDto;
}
