import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private countries = [
    { name: 'India', capital: 'New Delhi', population: 1400000000 },
    { name: 'USA', capital: 'Washington, D.C.', population: 331000000 },
    { name: 'Germany', capital: 'Berlin', population: 83000000 },
    { name: 'Japan', capital: 'Tokyo', population: 125000000 }
  ];


  constructor() { }
  getCountryByName(name: string): any {
    return this.countries.find(country => country.name.toLowerCase() === name.toLowerCase());
  }
}
