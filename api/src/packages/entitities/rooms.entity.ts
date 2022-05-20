import { Table, Model, Column, Unique } from 'sequelize-typescript';

@Table({ tableName: 'Rooms', timestamps: false })
export class Room extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  numBeds: number;

  @Column
  description: string;

  @Column
  amount: number;

  @Column
  type: string;

  //   @HasOne(() => Rol)
  //   role: Rol;
}
