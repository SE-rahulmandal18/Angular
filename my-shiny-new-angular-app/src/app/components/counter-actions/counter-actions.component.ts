import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent {
  // input output property decorator
  
  /* @Output() counterChange: EventEmitter<string> = new EventEmitter<string>(); */

  // two way bindind
  @Input() someNumber!: number;
  
  @Output() someNumberChange: EventEmitter<number> = new EventEmitter<number>();

 handleButton(operation: string){
  operation === "INC" ? this.someNumber++ : this.someNumber--;
  this.someNumberChange.emit(this.someNumber);
  console.log(operation);
 }
}
