import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  localStorage = localStorage;

  setItem<T>(key: string, value: T): T {
    this.localStorage.setItem(key, JSON.stringify(value));
    return value;
  }

  getItem(key: string): any {
    let value = this.localStorage.getItem(key);
    if (typeof value == 'string') {
      value = JSON.stringify(value);
    }
    return value;
  }

  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }


  constructor() { }
}
