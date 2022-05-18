import { Injectable } from '@nestjs/common';
import { CardPaymentDto } from '../dtos/cardPayment.dto';

@Injectable()
export class PaymentService {
  processPayment(payment: any) {
    if (payment.paymentMethod === 'card') {
      return this.cardPayment(payment);
    }
    return false;
  }

  cardPayment(cardPaymentDto: CardPaymentDto) {
    return true;
  }
}
