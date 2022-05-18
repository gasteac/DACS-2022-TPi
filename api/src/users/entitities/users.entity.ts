import { Table, Column, Model, HasMany, HasOne, Unique, ForeignKey } from 'sequelize-typescript';
import { Rol } from './rols.entity';



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

  @ForeignKey(() => Rol)
  @Column
  roleId: number;

//   @HasOne(() => Rol)
//   role: Rol;



  
}