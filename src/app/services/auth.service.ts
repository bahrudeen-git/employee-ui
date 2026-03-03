import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'isLoggedIn';

  constructor() { }

  login(username: string, password: string): boolean {
    // simple hardcoded check for demonstration
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(this.storageKey, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }
}
