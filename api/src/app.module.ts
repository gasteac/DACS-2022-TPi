import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/modules/db.module';
import { PackagesModule } from './packages/modules/packages.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ControlTourismModule } from './tourismControl/controlTourism.module';

@Module({
  imports: [PackagesModule, UsersModule, DatabaseModule, ControlTourismModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
