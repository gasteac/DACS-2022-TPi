import { Insurance } from '../entitities/insurances.entity';

export const InsuranceProvider = [
  {
    provide: 'INSURANCES_REPOSITORY',
    useClass: Insurance,
  },
];
