import { Module } from '@nestjs/common';
import { PaymentModule } from './payment.module';
import { SaleProvider } from './repositories/sale.repository';
import { PaymentService } from './services/payment.service';
import { SalesService } from './services/sales.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SalesService, PaymentService, ...SaleProvider],
  exports: [SalesService],
})
export class SaleModule {}
