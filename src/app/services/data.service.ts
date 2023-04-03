import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveData(data: any) {
    localStorage.setItem('my-data', JSON.stringify(data));
  }

  loadData(): any {
    const data = localStorage.getItem('my-data');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
}
