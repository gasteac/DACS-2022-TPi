import { Module } from '@nestjs/common';
import { PaymentModule } from './payment.module';
import { PaymentService } from './services/payment.service';
import { SalesService } from './services/sales.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SalesService, PaymentService],
  exports: [SalesService],
})
export class SaleModule {}
