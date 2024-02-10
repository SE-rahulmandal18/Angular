import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-data-server',
  templateUrl: './submit-to-server.component.html',
  styleUrl: './submit-to-server.component.css'
})
export class SubmitToServerComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private http: HttpClient ) {}
  userForm!: FormGroup;


ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]]
    });
}

onSubmit() {
  if(this.userForm.valid) {
    this.http.post('/api/userCreate', this.userForm.value)
    .subscribe((response) => {
      console.log('response ', response);
    })
 
  }
}
}
