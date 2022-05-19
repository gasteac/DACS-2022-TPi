import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackagesModule } from './packages/modules/packages.module';
import { ControlTourismModule } from './tourismControl/controlTourism.module';

@Module({
  imports: [PackagesModule, ControlTourismModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
