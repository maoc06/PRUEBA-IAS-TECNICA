import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponentComponent } from './presentation/pages/car-list-component/car-list-component.component';
import { CarFormComponentComponent } from './presentation/pages/car-form-component/car-form-component.component';

const routes: Routes = [
  {
    path: 'listPage',
    component: CarListComponentComponent,
  },
  {
    path: 'formPage',
    component: CarFormComponentComponent,
  },
  { path: '**', redirectTo: 'listPage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
