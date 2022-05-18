import { Injectable } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Injectable()
export class SalesService {
  constructor(private paymentService: PaymentService) {}

  handlePayment(req: any) {
    if (!req.payment) return false;
    const isValid = this.paymentService.processPayment(req.payment);
    if (isValid) return true;
    return false;
  }
}
