import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly STORAGE_KEY = 'user_info';
  private readonly LOGGED_IN_USER_KEY = 'logged_in_user';

  constructor(private storageService: StorageService) {}

  // check login chưa
  isLoggedIn(): boolean {
     // get info user
    const loggedInUser = this.storageService.get(this.LOGGED_IN_USER_KEY);
    // Kiểm tra xem có đăng nhập chưa
    return loggedInUser !== null;
  }
  // Lưu email và mật khẩu vào local storage
  saveAccounts(accounts: { email: string; password: string }[]): void {
    this.storageService.set(this.STORAGE_KEY, accounts);
  }

  // Lấy email và mật khẩu từ local storage
  getAccounts(): { email: string; password: string }[] {
    const accounts = this.storageService.get(this.STORAGE_KEY);
    return accounts ? accounts : [];
  }
  // Lưu thông tin người dùng đã đăng nhập vào local storage
  saveLoggedInUser(email: string): void {
    this.storageService.set(this.LOGGED_IN_USER_KEY, email);
  }

  // Lấy thông tin người dùng đã đăng nhập từ local storage
  getLoggedInUser(): string | null {
    return this.storageService.get(this.LOGGED_IN_USER_KEY);
  }
  // Xóa email và mật khẩu từ local storage
  clearDataUser(): void {
    this.storageService.remove(this.LOGGED_IN_USER_KEY);
  }
}
