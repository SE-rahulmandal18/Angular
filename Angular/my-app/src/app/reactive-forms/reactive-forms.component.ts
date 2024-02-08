import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn} from '@angular/forms';
import { User2 } from '../domain/user2';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit {

  signupForm: FormGroup;
  user: User2 = new User2();

  constructor() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

    });
  }

  ngOnInit(): void {

  }

  save() {
    console.log(this.signupForm);

    if (this.signupForm.valid) {
      console.log('firstName is: ', this.signupForm.get('firstName')?.value);
      console.log('Saved: ' + JSON.stringify(this.signupForm.value));
      alert("submitted succesfully");
    }
  }
}