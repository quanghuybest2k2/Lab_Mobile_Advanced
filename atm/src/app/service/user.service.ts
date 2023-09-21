import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInUserEmail: string = '';

  constructor() {}

  setLoggedInUserEmail(email: string) {
    this.loggedInUserEmail = email;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }
}
