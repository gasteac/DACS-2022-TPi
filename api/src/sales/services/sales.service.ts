import { Inject, Injectable } from '@nestjs/common';
import { Sale } from '../entitities/sale.entity';
import { PaymentService } from './payment.service';

@Injectable()
export class SalesService {
  constructor(
    private paymentService: PaymentService,
    @Inject('SALE_REPOSITORY') private saleRepository: typeof Sale,
  ) {}

  async findAll(options: any): Promise<Sale[]> {
    return this.saleRepository.findAll({ ...options });
  }

  async findAllByUserId(userId: number) {
    return this.saleRepository.findAll({
      where: { userId },
    });
  }

  handlePayment(payment: any, amount: number) {
    const isValid = this.paymentService.processPayment(payment, amount);
    if (isValid) return true;
    return false;
  }

  create(sale: any, amount: number) {
    const { userId, packageId, payment } = sale;
    const { paymentMethod } = payment;
    const newSale = new Sale({
      paymentAmount: amount,
      saleDate: new Date(),
      userId,
      packId: packageId,
      paymentMethod,
    });
    return newSale.save();
  }
}
