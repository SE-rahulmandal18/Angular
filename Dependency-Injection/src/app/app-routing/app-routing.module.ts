import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../components/user/user.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';



const appRoutes: Routes = [
  { path: 'users', component: UserComponent, children: [
    {path: ':id', component: UserDetailsComponent},
    {path: '', component: PlaceholderComponent},
  ] },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
