import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { RechargeService } from '../services/recharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  loggedInUserEmail: string = '';
  recharge: number = 0;

  constructor(
    private accountService: AccountService,
    private rechargeService: RechargeService,
    private route: Router
  ) {}
  ionViewWillEnter() {
    const loggedInUser = this.accountService.getLoggedInUser();

    if (loggedInUser) {
      this.loggedInUserEmail = loggedInUser;
    }
    this.recharge = this.rechargeService.getRechargeUser();
  }
  homeRedirect() {
    this.route.navigate(['/home']);
  }
  ngOnInit() {}
}
