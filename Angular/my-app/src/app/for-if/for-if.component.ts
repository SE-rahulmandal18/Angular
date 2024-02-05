import { Component } from '@angular/core';

@Component({
  selector: 'app-for-if',
  templateUrl: './for-if.component.html',
  styleUrl: './for-if.component.css'
})
export class ForIfComponent {

  people: any[] = [
    {
      "name": "Tobia",
      "age": 35
    },
    {
      "name": "Alex",
      "age": 32
    },
    {
      "name": "Brad Green",
      "age": 20
    },
    {
      "name": "Juri",
      "age": 28
    },
    {
      "name": "Samson",
      "age": 50
    }
  ];

}
