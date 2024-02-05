import { Component } from '@angular/core';

@Component({
  selector: 'app-first-last-odd-even',
  templateUrl: './first-last-odd-even.component.html',
  styleUrl: './first-last-odd-even.component.css'
})
export class FirstLastOddEvenComponent {

  people = [
    { name: 'alex ', age: '44', salary: '2545'},
    { name: 'brad ', age: '25', salary: '5665'},
    { name: 'John ', age: '40', salary: '4563'},
    { name: 'David ', age: '34', salary: '6545'},
    { name: 'Fluin ', age: '54', salary: '7524'}
  ]
}
