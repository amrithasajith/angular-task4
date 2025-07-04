import { Component } from '@angular/core';
import { CountryserveService } from '../countryserve.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  countryForm : FormGroup;

  constructor( private fb:FormBuilder ,private countryService:CountryserveService){
    this.countryForm = this.fb.group({
      name :['',Validators.required],
      country:['',Validators.required],
      capital:['',Validators.required]

    })
  }
  onSubmit(){
    if(this.countryForm.valid){
      this.countryService.addcountry(this.countryForm.value);
      this.countryForm.reset()
    }
  }
  

}
