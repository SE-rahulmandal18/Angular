import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { IUser } from './../../interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  user: any;

  users: Array<IUser> = [];


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {}
    
  

  ngOnInit() {

    this.users = this.userService.getUsers();

    this.activatedRoute.params.subscribe((params) => {
      this.user = this.users.filter((user) => {
        return user.id === +params['userId'];
      })[0];

      //console.log('Got the paramas as:', params);

    });

    this.activatedRoute.queryParams.subscribe((qs) => console.log('Got the QS as:', qs))
  }

}
