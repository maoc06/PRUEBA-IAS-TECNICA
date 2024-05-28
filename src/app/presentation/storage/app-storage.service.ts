import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CarModel } from 'src/app/domain/models/car.model';

@Injectable({
  providedIn: 'root',
})
export class AppStorageService {
  private subject = new Subject<any>();
  private carList!: CarModel[];

  addCar(newCar: CarModel) {
    this.subject.next(newCar);
  }
  onCarAdded(): Observable<any> {
    return this.subject.asObservable();
  }

  retrieveCarList() {
    return this.carList;
  }

  setInitialCarList(carList: CarModel[]) {
    this.carList = carList;
  }
}
