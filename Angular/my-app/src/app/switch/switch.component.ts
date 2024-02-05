import { Component } from '@angular/core';

@Component({
  selector: 'switch-comp',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {

  people: any[] = [
    {
      "name": "Tobia",
      "age": 35,
      "country": 'IND'
    },
    {
      "name": "Alex",
      "age": 32,
      "country": 'FRANCE'
    },
    {
      "name": "Brad Green",
      "age": 20,
      "country": 'JAPAN'
    },
    {
      "name": "Juri",
      "age": 28,
      "country": 'US'
    },
    {
      "name": "Samson",
      "age": 50,
      "country": 'UK'
    }
  ];

}
