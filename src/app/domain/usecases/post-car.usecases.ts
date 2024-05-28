import { Observable } from 'rxjs';
import { CarGateway } from '../models/car.gateway';
import { CarModel } from '../models/car.model';

export class PostCarUseCases {
  constructor(private _carGateway: CarGateway) {}

  save(_car: CarModel): Observable<void> {
    return this._carGateway.saveCar(_car);
  }
}
