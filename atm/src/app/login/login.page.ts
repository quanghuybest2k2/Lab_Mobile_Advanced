import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formData: { email: string; password: string } = {
    email: 'quanghuybest@gmail.com',
    password: '123456',
  };

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit() {}
  // Điều hướng
  goHomePgae() {
    this.router.navigateByUrl('/home');
  }

  validator(): boolean {
    if (!this.formData.email || !this.formData.password) {
      alert('Vui lòng nhập cả email và mật khẩu.');
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(this.formData.email)) {
      alert('Vui lòng nhập một địa chỉ email hợp lệ.');
      return false;
    }

    return true;
  }

  login() {
    if (this.validator()) {
      const inputEmail = this.formData.email;
      const inputPassword = this.formData.password;

      // Lấy danh sách tài khoản từ local storage
      const existingAccounts = this.accountService.getAccounts();

      // Tìm tài khoản trong danh sách
      const matchedAccount = existingAccounts.find(
        (account) =>
          account.email === inputEmail && account.password === inputPassword
      );

      if (matchedAccount) {
        // Lưu thông tin đăng nhập vào local storage
        this.accountService.saveLoggedInUser(inputEmail);

        // Thực hiện các tác vụ khác sau đăng nhập thành công

        this.router.navigateByUrl('/home');
      } else {
        alert('Sai tên tài khoản hoặc mật khẩu!');
      }
    }
  }
  // Hàm xóa
  deleteUser() {
    if (this.validator()) {
      const inputEmail = this.formData.email;
      const inputPassword = this.formData.password;

      // Lấy danh sách tài khoản từ local storage
      const existingAccounts = this.accountService.getAccounts();

      // Tìm tài khoản trong danh sách dựa trên email và mật khẩu
      const matchedAccountIndex = existingAccounts.findIndex(
        (account) =>
          account.email === inputEmail && account.password === inputPassword
      );

      if (
        matchedAccountIndex !== -1 &&
        confirm('Bạn có chắc chắn muốn xóa người dùng?')
      ) {
        // Xóa tài khoản nếu tồn tại
        existingAccounts.splice(matchedAccountIndex, 1);

        // Lưu danh sách tài khoản mới vào local storage
        this.accountService.saveAccounts(existingAccounts);
        // Xóa tài khoản đăng đăng nhập luôn
        this.accountService.clearDataUser();
        this.router.navigateByUrl('/login');
      } else {
        alert('Không tìm thấy tài khoản này!');
      }
    }
  }

  // Hàm Thêm
  addUser() {
    if (this.validator()) {
      const existingAccounts = this.accountService.getAccounts();

      const accountExists = existingAccounts.some(
        (account) => account.email === this.formData.email
      );

      if (accountExists) {
        alert('Tài khoản đã tồn tại');
      } else {
        // lưu vào mảng
        existingAccounts.push({
          email: this.formData.email,
          password: this.formData.password,
        });
        // đưa vào local storage
        this.accountService.saveAccounts(existingAccounts);
        // điều  hướng
        alert('Thêm tài khoản thành công.');
      }
    }
  }
  // Hàm xem tất cả
  viewAll() {
    // alert('Xem chi tiết');
    const accounts = this.accountService.getAccounts();

    if (accounts.length > 0) {
      let stt = 1;
      const accountList = accounts
        .map(
          (account) =>
            `STT ${stt++}, Email: ${account.email}, Mật khẩu: ${
              account.password
            }`
        )
        .join('\n');
      alert(`Danh sách các tài khoản:\n${accountList}`);
    } else {
      alert('Không có tài khoản nào trong local storage!');
    }
  }
}
