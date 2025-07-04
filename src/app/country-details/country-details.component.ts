import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {

  // countryName: string = '';

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.countryName = this.route.snapshot.paramMap.get('name') || '';
  // }
  country: any;
 
  constructor(private route: ActivatedRoute, private service: RegistrationService) {
    // ✅ Use subscription to listen for changes in route parameters
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.country = this.service.getCountryByName(name);
      }
    });
  }
}
