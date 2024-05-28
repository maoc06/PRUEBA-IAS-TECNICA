import { Observable } from 'rxjs';
import { CarGateway } from '../models/car.gateway';
import { CarModel } from '../models/car.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCarUseCases {
  constructor(private _carGateway: CarGateway) {}

  getAllCars(): Observable<CarModel[]> {
    return this._carGateway.getAllCars();
  }
}
