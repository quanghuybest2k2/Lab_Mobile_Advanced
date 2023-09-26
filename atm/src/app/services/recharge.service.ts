import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class RechargeService {
  private readonly AMOUNT_KEY = 'amount';
  constructor(private storageService: StorageService) {}

  saveRechargeUser(recharge: number): void {
    this.storageService.set(this.AMOUNT_KEY, recharge);
  }
  getRechargeUser(): number {
    return this.storageService.get(this.AMOUNT_KEY);
  }
  clearDataAmount(): void {
    this.storageService.remove(this.AMOUNT_KEY);
  }
}
