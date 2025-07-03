import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryserveService {
  //  private countries :any[] =[]
   private countries = [
    { name: 'Germany', country: 'Germany', capital: 'Berlin' },
    { name: 'India', country: 'India', capital: 'New Delhi' },
    { name: 'Japan', country: 'Japan', capital: 'Tokyo' },
    { name: 'France', country: 'France', capital: 'Paris' },
    { name: 'USA', country: 'USA', capital: 'Washington D.C.' },
    { name: 'Brazil', country: 'Brazil', capital: 'Brasilia' },
    { name: 'Canada', country: 'Canada', capital: 'Ottawa' },
    { name: 'UK', country: 'UK', capital: 'London' },
    { name: 'Italy', country: 'Italy', capital: 'Rome' },
    { name: 'Russia', country: 'Russia', capital: 'Moscow' },
    // add more if needed
  ];
   getCountries(){
    return this.countries;
   }
   
   addcountry(countryData: any){
  this.countries.push(countryData);
  console.log(countryData)
}
  searchCountries(keyword: string) {
    if (!keyword.trim()) return this.countries;
    return this.countries.filter(
      item =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.country.toLowerCase().includes(keyword.toLowerCase()) ||
        item.capital.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  paginate(data: any[], page: number, pageSize: number) {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }

   
  constructor() { }
}
