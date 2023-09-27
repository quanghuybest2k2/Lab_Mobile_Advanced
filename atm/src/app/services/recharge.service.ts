import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class RechargeService {
  private readonly AMOUNT_KEY = 'amount';
  constructor(private storageService: StorageService) {}

  saveRechargeUser(recharge: number): void {
    const currentAmount = this.getRechargeUser() || 0;
    // Cộng dồn tiền
    const newAmount = currentAmount + recharge;
    // Lưu giá trị mới
    this.storageService.set(this.AMOUNT_KEY, newAmount);
  }
  getRechargeUser(): number {
    return this.storageService.get(this.AMOUNT_KEY);
  }
  withdrawMoneyUser(withdrawAmount: number): void {
    const currentAmount = this.getRechargeUser() || 0;

    if (withdrawAmount <= currentAmount) {
      const newAmount = currentAmount - withdrawAmount;
      this.storageService.set(this.AMOUNT_KEY, newAmount);
    } else {
      alert('Không đủ số dư để rút tiền');
    }
  }
  clearDataAmount(): void {
    this.storageService.remove(this.AMOUNT_KEY);
  }
}
