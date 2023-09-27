import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {
  formData: { recharge: number } = {
    recharge: 0,
  };
  constructor(
    private router: Router,
    private rechargeService: RechargeService
  ) {}

  ngOnInit() {}

  submitRecharge() {
    const maxValue: number = 1_000_000_000;
    if (this.formData.recharge >= maxValue) {
      alert(
        'Số tiền không vượt quá: ' +
          maxValue.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })
      );
    } else {
      this.rechargeService.saveRechargeUser(this.formData.recharge);
      this.router.navigateByUrl('/account-info');
    }
  }
  withdrawMoney() {
    const maxValue: number = 50_000_000;
    if (this.formData.recharge >= maxValue) {
      alert(
        'Số tiền rút không vượt quá: ' +
          maxValue.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })
      );
    } else {
      this.rechargeService.withdrawMoneyUser(this.formData.recharge);
      this.router.navigateByUrl('/account-info');
    }
  }
}
