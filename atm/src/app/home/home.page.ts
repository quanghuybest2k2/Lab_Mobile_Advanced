import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loggedInUserEmail: string = '';

  constructor(private route: Router, private userService: UserService) {}

  ionViewWillEnter() {
    this.loggedInUserEmail = this.userService.getLoggedInUserEmail();
  }
  
  nextpage() {
    this.route.navigate(['/account-info']);
  }
  rechargePage(){
    this.route.navigate(['/recharge']);
  }
}
