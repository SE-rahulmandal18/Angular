import { Component } from '@angular/core';
import { Product } from './classes/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-first-angular-project';

  noOfProductViews: number = 0;

  //pipes
  today = new Date();

  myProduct:Product = new Product('Printer',11500,'not found', true, true);


  parentFunc1(evt: any): void {
    console.log(`got an event from the chils ${evt}`);

    this.noOfProductViews = evt;
  }
}
