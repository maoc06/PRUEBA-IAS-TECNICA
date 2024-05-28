import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CarListComponentComponent } from './presentation/pages/car-list-component/car-list-component.component';
import { CarFormComponentComponent } from './presentation/pages/car-form-component/car-form-component.component';
import { CarGateway } from './domain/models/car.gateway';
import { CarService } from './infraestructure/driven-adapters/car.service';
import { GetCarUseCases } from './domain/usecases/get-car.usecases';
import { CardComponent } from './presentation/components/card/card.component';
import { NavBarComponent } from './presentation/components/nav-bar/nav-bar.component';
import { CurrencyPipe } from './presentation/pipes/currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponentComponent,
    CarFormComponentComponent,
    CardComponent,
    NavBarComponent,
    CurrencyPipe,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [GetCarUseCases, { provide: CarGateway, useClass: CarService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
