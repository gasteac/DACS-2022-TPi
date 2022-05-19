import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { retry, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ControlTourismService {
  constructor(private httpService: HttpService) {}

  httpComptralor(): Observable<any> {
    return this.httpService
      .get('http://localhost:5000/api/directories', { validateStatus: null })
      .pipe(
        mergeMap((val: any) => {
          if (val.status >= 400) {
            return throwError(`${val.status}`);
          }
          return of(val.data);
        }),
        retry(10),
        catchError((err) => {
          return of({ statusCode: err });
        }),
      );
  }

  async validate(): Promise<boolean> {
    const response = await this.httpComptralor().toPromise();
    if (response.aprobada) {
      return true;
    }
    if (response.statusCode >= 400) {
      throw new InternalServerErrorException('Max re-try Exceded');
    }
    return false;
  }
}
