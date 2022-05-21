import { Controller, Get } from '@nestjs/common';
import { MarketingService } from '../services/MarketingService.service';

@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}
  @Get('/')
  getHello() {
    return this.marketingService.handleNotifications();
  }
}
