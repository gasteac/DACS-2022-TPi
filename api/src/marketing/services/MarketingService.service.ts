import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { ReservedPackagesService } from 'src/packages/services/ReservedPackages.service';
import { MailerService } from '@nestjs-modules/mailer';
import { SalesService } from 'src/sales/services/sales.service';
import { User } from 'src/users/entitities/users.entity';
import { Package } from 'src/packages/entitities/packages.entity';
import { Hotel } from 'src/packages/entitities/hotel.entity';
import { Ticket } from 'src/packages/entitities/tickets.entity';
import { Op, Sequelize } from 'sequelize';

@Injectable()
export class MarketingService {
  private readonly logger = new Logger(MarketingService.name);
  constructor(
    private saleService: SalesService,
    private mailerService: MailerService,
  ) {}

  async sendMail(email: string, name: string, pack: Pack) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Dont forget your Package',
      template: '/email',
      context: {
        name: name,
        pack: pack.name,
      },
    });
  }

  // @Timeout(10000)
  async handleNotifications() {
    const date = new Date();
    date.setDate(date.getDate() + 20);
    const sales = await this.saleService.findAll({
      where: { paymentMethod: 'card' },
      group: ['userId'],
      include: [
        User,
        {
          model: Package,
          as: 'sales',
          include: [
            {
              model: Ticket,
              where: {
                departureDate: {
                  [Op.lt]: date,
                },
              },
            },
          ],
        },
      ],
    });
    sales.forEach(async (sale) => {
      const { user, pack } = sale;
      const { email, firstName, lastName } = user;
      await this.sendMail(email, `${firstName} ${lastName}`, pack);
    });
    this.logger.debug('Called in intervals of 10 seconds');
  }
}
