import { Component, OnInit } from '@angular/core';
import { RechargeService } from '../service/recharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {
  formData: { recharge: number } = {
    recharge: 0,
  };
  constructor(private router: Router, private rechargeService: RechargeService) {}

  ngOnInit() {}
  
  submitRecharge() {
    const maxValue: number = 10000000;
    if (this.formData.recharge >= maxValue) {
      alert('Số tiền không vượt quá: ' + maxValue);
    } else {
    this.rechargeService.setRecharge(this.formData.recharge);
    this.router.navigateByUrl('/account-info');
    }
  }
}
