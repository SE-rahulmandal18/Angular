import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<{id: number, name: string, email: string}> =
  [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com'},
    { id: 2, name: 'Jocob Riglin', email: 'jacob.riglin@example.com'},
    { id: 3, name: 'Tom Jauncey', email: 'tom.jauncey@example.com'},
    { id: 4, name: 'Jeremy Jauncey', email: 'jeremy.jauncy@example.com'},
    { id: 5, name: 'Sam Kolder', email: 'sam.kolder@example.com'},
    { id: 6, name: 'Peter Mckinson', email: 'peter.mckinson@example.com'},
    { id: 7, name: 'Jordan Taylor', email: 'jordon.taylor@example.com'}
  ];
  
  constructor() {}
  ngOnInit(): void {
      
  }
}
 

