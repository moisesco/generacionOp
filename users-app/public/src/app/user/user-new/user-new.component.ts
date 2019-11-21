import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  @Output() createNewUserEvent = new EventEmitter();

  newUser =new User;

  constructor(private router: Router) { }

  ngOnInit() {}

/*
  goToUrl(): void {
    window.location.href = 'app-user-univ';
  }
*/
  create(){
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();

    //enrutamiento
    this.router.navigate(['/userUniv']);
  }
}
