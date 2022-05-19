import { Table, Column, Model, Unique, ForeignKey } from 'sequelize-typescript';
import { Role } from './rols.entity';

@Table({ tableName: 'Users', timestamps: false })
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Unique
  @Column
  email: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;

  @Column
  cuit: string;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  //   @HasOne(() => Rol)
  //   role: Rol;
}
