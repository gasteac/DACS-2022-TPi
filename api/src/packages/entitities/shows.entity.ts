import { Column, Model, Table } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/types';

@Table({ tableName: 'Shows', timestamps: false })
export class Show extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
   seat: number;

  @Column
  Date:Date;

  @Column
  amount: number;
}
