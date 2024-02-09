import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conditional-validation',
  templateUrl: './conditional-validation.component.html',
  styleUrl: './conditional-validation.component.css'
})
export class ConditionalValidationComponent implements OnInit {

  public addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({

      street: ['', Validators.required],

      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],

      country: ['US']
    });

    this.addressForm.get('country')?.valueChanges.subscribe(

      (country: string) => {

        if (country === 'US') {

          this.addressForm.get('postalCode')?.setValidators([Validators.required, Validators.pattern('^[0-9]{5}?:-[0-9]{4})?$')]);

        }
        else if
          (country === 'CA') {

          this.addressForm.get('postalCode')?.setValidators([Validators.required, Validators.pattern('[ABCDEFGHIJKLMNOPQRSTUVWXY][0-9][ABCDEFGHIJKLMNOPQRSTUVWXYZ]?[0-9][ABCDEFGHIJKLMNOPQRSTUVWXY][0-9]')]);
        }

        this.addressForm.get('postalCode')?.updateValueAndValidity();
      })



  }
  
  save(x: any) {
     
    console.log(this.addressForm);

    if (this.addressForm.valid) {

console.log('Saved ' + JSON.stringify(this.addressForm.value));
    }
  }
}
