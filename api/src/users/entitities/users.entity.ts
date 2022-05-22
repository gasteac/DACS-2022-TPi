import { Table, Column, Model, Unique, ForeignKey, HasOne, BelongsToMany } from 'sequelize-typescript';
import { Pack } from 'src/packages/entitities/packages.entity';
import { Sale } from 'src/sales/entitities/sale.entity';
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

  @BelongsToMany(() => Pack, () => Sale)
  sales: Pack[];

  // @HasOne(() => Role)
  // role: Role;
}
