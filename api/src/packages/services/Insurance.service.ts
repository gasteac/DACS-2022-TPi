import { Inject, Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { Insurance } from '../entitities/insurances.entity';

@Injectable()
export class InsuranceService {
  constructor(
    @Inject('INSURANCES_REPOSITORY')
    private insuranceRepository: typeof Insurance,
  ) {}

  async create(insurance: Insurance): Promise<Insurance> {
    const newInsurance = new Insurance({ ...insurance });
    await newInsurance.save();
    return newInsurance;
  }

  async delete(id: number): Promise<Insurance> {
    const insurance = await this.insuranceRepository.findOne({
      where: { id },
    });
    if (!insurance) {
      throw new NotFoundError('Insurance not found');
    }
    await insurance.destroy();
    return insurance;
  }
}
