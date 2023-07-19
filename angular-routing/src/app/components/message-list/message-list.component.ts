import { 
  Component, 
//   OnInit, 
//   ViewChild, 
//   AfterViewInit, 
//   ViewChildren,
//   QueryList,
//   ContentChild,
//   AfterContentInit,
//   ContentChildren
} from '@angular/core';
import { CanComponentDeactivate } from 'src/app/guards/confirmation/confirmation.guard';

// import { MessageComponent } from './../message/message.component';



@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements CanComponentDeactivate {

  messages: Array<{ message: string }> = [];

  constructor() { }

//   ngOnInit() {
//     this.messages = [
//       { message: 'Message 1' }
//       /* { message: 'Message 2' },
//       { message: 'Message 3' },
//       { message: 'Message 4' },
//       { message: 'Message 5' } */
//     ];
//   }

  onMessageDelete($event: number) {
    this.messages.splice($event, 1);
  }

  changeFirstMessage() {
    this.messages[0].message = 'This is a changed message';
  }

  confirm(): boolean {
    return confirm('Are you sure you want to navigate away?');
  }

}