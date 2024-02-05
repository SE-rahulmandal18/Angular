import { Component } from '@angular/core';

@Component({
  selector: 'track-by-demos',
  templateUrl: './track-by-demos.component.html',
  styleUrl: './track-by-demos.component.css'
})
export class TrackByDemosComponent {

  employees: any[];

  constructor()
  {

    this.employees = [
      {
        code: '1', name:'Tobia', gender: 'Female', salary: 15545
      },
      {
        code: '2', name:'Evana', gender: 'Female', salary: 45320
      },
      {
        code: '3', name:'Ruby', gender: 'Female', salary: 2125
      },
      {
        code: '4', name:'Juri', gender: 'Female', salary: 6454
      },
    ];
  }




  
}
