import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = false;

  constructor() {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const body = document.getElementsByTagName('body')[0];
    if (this.darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

}