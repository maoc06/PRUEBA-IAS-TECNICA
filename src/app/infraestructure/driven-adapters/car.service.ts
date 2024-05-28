import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarGateway } from 'src/app/domain/models/car.gateway';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/domain/models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService extends CarGateway {
  private _url = 'https://freetestapi.com/api/v1/cars';

  constructor(private http: HttpClient) {
    super();
  }

  override getAllCars(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this._url);
  }
  override saveCar(_car: CarModel): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
