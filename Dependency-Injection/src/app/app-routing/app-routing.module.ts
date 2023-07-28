import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: 'id', component: UserDetailsComponent },
    {path: '', component: PlaceholderComponent}
  ]},
  {path: '**', redirectTo: '/users', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
