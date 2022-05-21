import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Hotel } from './hotel.entity';
import { Insurance } from './insurances.entity';
import { Show } from './shows.entity';
import { Ticket } from './tickets.entity';

@Table({ tableName: 'Packs', timestamps: false })
export class Pack extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @ForeignKey(() => Hotel)
  @Column
  hotelId: number;

  @ForeignKey(() => Ticket)
  @Column
  ticketId: number;

  @ForeignKey(() => Insurance)
  @Column
  insuranceId: number;

  @ForeignKey(() => Show)
  @Column
  showId: number;

  @BelongsTo(() => Hotel)
  hotel: Hotel;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @BelongsTo(() => Insurance)
  insurance: Insurance;

  @BelongsTo(() => Show)
  show: Show;
}
