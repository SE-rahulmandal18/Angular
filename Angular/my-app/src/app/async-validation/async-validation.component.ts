import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Adjust import paths as needed
import { UserValidators } from '../userValidator';

@Component({
  selector: 'app-async-validation',
  templateUrl: './async-validation.component.html',
  styleUrls: ['./async-validation.component.css'] // Corrected typo here
})
export class AsyncValidationComponent implements OnInit {
  form!: FormGroup; // Initialize 'form' property

  constructor(
    private fb: FormBuilder,
    private service: UserValidators
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [
        null,
        Validators.compose([Validators.required, Validators.minLength(3)]),
        this.service.UserValidators()
      ],
    });
  }

  save() {
    alert("user name available");
    console.log('save to db');
  }
}
