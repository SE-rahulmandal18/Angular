import { Component } from '@angular/core';

@Component({
  selector: 'attribute-binding',
  templateUrl: './attribute-binding-demo.component.html',
  styleUrl: './attribute-binding-demo.component.css'
})
export class AttributeBindingDemoComponent {

  pageHeader: string = 'Emp Details';
  FirstName: string = 'Sam';
  LastName: string = 'Alex';
  Dept: string = 'admin';
  Mobile: number = 123;
  Gender: string = 'Male';
  Age: number = 43;
   

  columnSpan:number=2;

}
