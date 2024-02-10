import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrl: './custom-validation.component.css'
})
export class CustomValidationComponent implements OnInit {

  validateForm : any;

 ngOnInit(): void {
  throw new Error('Method not implemented.');
}

  constructor(private form: FormBuilder) {

    this.validateForm = new FormGroup({
      'name' : new FormControl(),
      'email' : new FormControl(),
      'age' : new FormControl(),
      'address' : new FormControl({
        'country': new FormControl(),
        'city': new FormControl()
      })
    });
  }
 
  register(validateForm: any) {
     console.log('Registration succesful.');
     console.log(validateForm.value);
     alert("Hi " + validateForm.value.name+" your information are valid.")
  }

  getControls() {
    return (this.validateForm.get('address') as FormArray).controls;
  }
}
