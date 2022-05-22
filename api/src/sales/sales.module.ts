import { Module } from '@nestjs/common';
import { PackagesModule } from 'src/packages/modules/packages.module';
import { ControlTourismModule } from 'src/tourismControl/controlTourism.module';
import { UsersModule } from 'src/users/users.module';
import { SalesController } from './controllers/sales.controller';
import { PaymentModule } from './payment.module';
import { SaleProvider } from './repositories/sale.repository';
import { PaymentService } from './services/payment.service';
import { SalesService } from './services/sales.service';

@Module({
  imports: [PackagesModule, ControlTourismModule, UsersModule],
  controllers: [SalesController],
  providers: [SalesService, PaymentService, ...SaleProvider],
  exports: [SalesService],
})
export class SaleModule {}
