import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user'
import { Router } from "@angular/router";
import "rxjs";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //creamos un arreglo de User
  users: User []= [];
  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  goToUrl() {
   this.router.navigate(['/userUniv']);
  //window.location.href = 'app-user-univ';
  }

  getUsers(){
    this._userService.getUsers()
    .then(users => this.users = users);
  }

  create(user: User){
    this._userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i,1);
  }

  update(users){
    console.log(users);
    const i = this.users.indexOf(users.original)
    this.users[i] = users.edited;
  }
}
