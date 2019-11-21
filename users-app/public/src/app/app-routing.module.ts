import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserUnivComponent } from './user/user-univ/user-univ.component';
import { UserComponent } from './user/user.component'


const routes: Routes = [
  {path: 'userUniv', component: UserUnivComponent},
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: '/user', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
