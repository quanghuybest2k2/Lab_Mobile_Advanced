import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Lấy dữ liệu từ local storage
  get(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Lưu dữ liệu vào local storage
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Xóa dữ liệu từ local storage
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
