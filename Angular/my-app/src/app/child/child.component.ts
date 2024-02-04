import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

@Input() title:string="";  // tile becomes getter or setter because of @Input

// create a  custom event -> event name is notify

@Output() notify:EventEmitter<string> = new EventEmitter<string>(); 

// fire the custom event

fireCustomEvent()
{
  this.notify.emit("Hello parent");   // emit -> will trigger the event
  // this.notify.emit(Math.random().toString());
} 

}
