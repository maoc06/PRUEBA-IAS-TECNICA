import { Component, Input } from '@angular/core';
import { CarModel } from 'src/app/domain/models/car.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() carData!: CarModel;

  
}
