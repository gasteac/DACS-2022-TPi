import { Pack } from '../entitities/packages.entity';

export const PackProvider = [
  {
    provide: 'PACK_REPOSITORY',
    useValue: Pack,
  },
];
