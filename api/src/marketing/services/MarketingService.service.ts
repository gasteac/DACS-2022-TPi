import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { PackagesByClientService } from 'src/packages/services/PackagesByClient.service';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MarketingService {
  private readonly logger = new Logger(MarketingService.name);
  constructor(
    private packagesByClientService: PackagesByClientService,
    private mailerService: MailerService,
  ) {}

  async sendMail(email: string, name: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Greeting from NestJS NodeMailer',
      template: '/email',
      context: {
        name: name,
      },
    });
  }

  //   @Interval(10000)
  async handleNotifications() {
    this.logger.debug('Called in intervals of 10 seconds');
  }
}
