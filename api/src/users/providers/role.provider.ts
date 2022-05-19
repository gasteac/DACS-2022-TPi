import { Role } from '../entitities/rols.entity';

export const RoleProvider = [
  {
    provide: 'ROLE_REPOSITORY',
    useValue: Role,
  },
];
