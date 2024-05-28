import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarModel } from 'src/app/domain/models/car.model';
import { GetCarUseCases } from 'src/app/domain/usecases/get-car.usecases';
import { AppStorageService } from '../../storage/app-storage.service';

@Component({
  selector: 'app-car-list-component',
  templateUrl: './car-list-component.component.html',
  styleUrls: ['./car-list-component.component.scss'],
})
export class CarListComponentComponent implements OnInit, OnDestroy {
  cars: CarModel[];
  carSub: Subscription;

  constructor(
    private getCarsUseCases: GetCarUseCases,
    private carStorageService: AppStorageService
  ) {
    this.cars = [];
    this.carSub = this.carStorageService.onCarAdded().subscribe((newCar) => {
      if (newCar) {
        console.log('car added:', newCar);
      }
    });
  }
  
  ngOnInit(): void {
    console.log('CarListComponentComponent inicializado');
    const storageData = this.carStorageService.retrieveCarList();
    console.log(storageData);
    if(!storageData) {
      this.getAllCars();
    } else {
      console.log('Consume el servicio de almacenamiento local');
      this.cars = storageData;
    }
  }

  getAllCars(): void {
    this.getCarsUseCases.getAllCars().subscribe((res: CarModel[]) => {
      console.log('Consume el servicio API');
      this.carStorageService.setInitialCarList(res);
      this.cars = res;
    });
  }

  ngOnDestroy(): void {
    this.carSub.unsubscribe();
  }
}
