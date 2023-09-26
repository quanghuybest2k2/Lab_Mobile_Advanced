import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service'; // Import StorageService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loggedInUserEmail: string = '';

  constructor(private route: Router, private storageService: StorageService) {}

  ionViewWillEnter() {
    const credentials = this.storageService.get();

    if (credentials) {
      this.loggedInUserEmail = credentials.email;
    }
  }

  nextpage() {
    this.route.navigate(['/account-info']);
  }

  rechargePage() {
    this.route.navigate(['/recharge']);
  }
}
