import { Injectable } from '@nestjs/common';

const packagesCostumerRepository = [
  {
    id: 1,
    clientId: 1,
    name: 'Package 1',
    buyed: false,
  },
  {
    id: 2,
    clientId: 1,
    name: 'Package 2',
    buyed: true,
  },
  {
    id: 3,
    clientId: 1,
    name: 'Package 3',
    buyed: true,
  },
];

@Injectable()
export class PackagesByClientRepository {
  findAll(options: any): any {
    const { clientId } = options.where;
    return packagesCostumerRepository.filter(
      (packageCostumer) =>
        packageCostumer.clientId === clientId && packageCostumer.buyed,
    );
  }
}
