import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RechargeService {
  private recharge: number = 0;

  constructor() {}

  setRecharge(recharge: number) {
    this.recharge = recharge;
  }

  getRecharge(): number {
    return this.recharge;
  }
}
