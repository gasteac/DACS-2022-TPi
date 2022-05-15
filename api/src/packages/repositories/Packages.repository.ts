import { Injectable } from '@nestjs/common';

const packagesRepository = [
  {
    id: 1,
    name: 'Package 1',
  },
  {
    id: 2,
    name: 'Package 2',
  },
  {
    id: 3,
    name: 'Package 3',
  },
];

@Injectable()
export class PackagesRepository {
  delete(options: any): any {
    const { packageId } = options.where;
    const exist = packagesRepository.find(
      (packageR) => packageR.id == packageId,
    );
    if (exist) {
      return 'Package deleted successfully';
    }
    return "Package doesn't exist";
  }
}
