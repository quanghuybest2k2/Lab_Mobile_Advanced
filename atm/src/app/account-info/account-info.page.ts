import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { RechargeService } from '../service/recharge.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  loggedInUserEmail: string = '';
  recharge: number = 0;

  constructor(
    private userService: UserService,
    private rechargeService: RechargeService
  ) {}
  ionViewWillEnter() {
    this.loggedInUserEmail = this.userService.getLoggedInUserEmail();
    this.recharge = this.rechargeService.getRecharge();
  }
  ngOnInit() {}
}
