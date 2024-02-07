import { Component, Inject } from '@angular/core';
import { API_URL } from '../api.Token';

@Component({
  selector: 'use-value-demo',
  templateUrl: './use-value-demo.component.html',
  styleUrl: './use-value-demo.component.css',
  providers: [{
    provide: API_URL,
    useValue: "https://google.com"
  }]
})
export class UseValueDemoComponent {

  constructor(@Inject(API_URL) readonly apiUrl: string) {
    console.log(this.apiUrl);
  }
}
