import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { LocalStrategy } from '../strategies/auth.local.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JTW_SECRET || 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [],
})
export class AuthModule {}
