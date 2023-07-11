import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-first-angular-project';

  noOfProductViews: number = 0;

  parentFunc1(evt: any): void {
    console.log(`got an event from the chils ${evt}`);

    this.noOfProductViews = evt;
  }
}
