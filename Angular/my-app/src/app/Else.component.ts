
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'else-comp',
    template: `

    <!--
    <div *ngIf="!isLoggedIn">
    Please login, friend.
    </div> 

    <div *ngIf="isLoggedIn || isNewUser">
    Welcome !

    </div> 
    -->

    <ng-container
      *ngIf="isLoggedIn; then loggedIn; else loggedOut">
    </ng-container>

    
    <ng-template #loggedIn>
    <div>
      Welcome back , friend.
    </div>
    </ng-template>

    <ng-template #loggedOut>
    <div>
      Please friend , login.
     </div>
    </ng-template>


    `

})

export class ElseComponent implements OnInit {

    isLoggedIn = true;
    isNewUser=true;

    constructor() { }

    ngOnInit() { }
}