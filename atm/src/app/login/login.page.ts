import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 formData: { email: string, password:string } = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  login() {
    if (this.formData.email === 'quanghuybest@gmail.com' && this.formData.password === '123456') {
      this.userService.setLoggedInUserEmail(this.formData.email);
      this.router.navigateByUrl('/home');
    } else {
      alert("Sai tên tài khoản hoặc mật khẩu!");
    }
    // console.log(this.formData.email);
    // console.log(this.formData.password);
  }
}
