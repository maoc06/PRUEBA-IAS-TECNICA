import { Observable } from "rxjs";
import { CarModel } from "./car.model";

export abstract class CarGateway {
    abstract getAllCars(): Observable<CarModel[]>;
    abstract saveCar(_car: CarModel): Observable<void>;
    // abstract updateCarAvalaible(id: string, isAvalaible: boolean) 
}