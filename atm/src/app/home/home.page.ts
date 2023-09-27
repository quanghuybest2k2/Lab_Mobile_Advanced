import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loggedInUserEmail: string = '';

  constructor(
    private route: Router,
    private accountService: AccountService,
    private rechargeService: RechargeService
  ) {}

  ionViewWillEnter() {
    // Lấy email từ local storage
    const loggedInUser = this.accountService.getLoggedInUser();

    if (loggedInUser) {
      this.loggedInUserEmail = loggedInUser;
    }
  }

  nextpage() {
    this.route.navigate(['/account-info']);
  }

  rechargePage() {
    this.route.navigate(['/recharge']);
  }
  logout() {
    this.rechargeService.clearDataAmount();
    this.accountService.clearDataUser();
    this.route.navigate(['/login']);
  }
  ngOnInit() {}
}
