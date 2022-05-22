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
import { UserService } from 'src/users/services/users.service';
import { Sale } from 'src/sales/entitities/sale.entity';

@Injectable()
export class MarketingService {
  private readonly logger = new Logger(MarketingService.name);
  constructor(
    private userService: UserService,
    private mailerService: MailerService,
  ) {}

  async sendMail(email: string, name: string, packs: any[]) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Dont forget your Packages',
      template: '/email',
      context: {
        name: name,
        show_packs: packs,
      },
    });
  }

  // @Timeout(10000)
  async handleNotifications() {
    const date = new Date();
    date.setDate(date.getDate() + 20);
    const salesByUser = await this.userService.findAll({
      include: [
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
    salesByUser.forEach(async (user) => {
      const { email, firstName, lastName, sales } = user;
      const packs = sales.map((sale) => sale.name);
      await this.sendMail(email, `${firstName} ${lastName}`, packs);
    });
    this.logger.debug('Called in intervals of 10 seconds');
  }
}
