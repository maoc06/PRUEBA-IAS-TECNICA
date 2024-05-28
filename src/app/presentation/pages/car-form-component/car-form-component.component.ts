import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppStorageService } from '../../storage/app-storage.service';

@Component({
  selector: 'app-car-form-component',
  templateUrl: './car-form-component.component.html',
  styleUrls: ['./car-form-component.component.scss'],
})
export class CarFormComponentComponent {
  checked = false;
  disabled = false;
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carStorageService: AppStorageService
  ) {
    this.carForm = this.initForm();
  }

  saveNewCar() {
    if (this.carForm.invalid) {
      alert('Formulario invalido');
      return;
    }

    // push new car locally
    const newCarData = this.carForm.value;
    this.carStorageService.addCar(newCarData);
  }

  initForm() {
    return this.fb.group({
      make: ['', [Validators.required, Validators.min(3), Validators.max(20)]],
      model: ['', [Validators.required, Validators.min(3), Validators.max(20)]],
      year: ['', [Validators.required,]],
      color: ['', [Validators.required, Validators.min(3), Validators.max(20)]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      // isAvailable: [this.checked, [Validators.required]],
    });
  }
}
