import { AbstractControl, NgForm } from '@angular/forms';
import { User2 } from '../domain/user2';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent implements OnInit {

  @ViewChild('signupForm') signupForm!: NgForm;
  user!: User2;
  ngOnInit() {
    this.user = new User2();
  }


  get form(): { [key: string]: AbstractControl; } {
    return this.signupForm.controls;
  }

  save() {
    console.log(this.signupForm);

    // console.log(this.signupForm.form.controls["firstName"].value);
    // console.log(this.user.firstName);

    if (this.signupForm.valid)
    {
      console.log('Saved: ' +JSON.stringify(this.signupForm.value));
      alert("submitted succesfully");
    }
   
  }
}
