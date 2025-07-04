import { Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CountrytableComponent } from './countrytable/countrytable.component';

export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },

  // Route for reactive form
  { path: 'form', component: ReactiveformComponent },

  // Nested routes for countries
  {
    path: 'countries',
    children: [
      // Shows the list/table of countries
      { path: '', component: CountrytableComponent },

      // Shows details of a selected country using lazy-loaded standalone component
      {
        path: ':name/details',
        loadComponent: () =>
          import('./country-details/country-details.component').then(m => m.CountryDetailsComponent)
      }
    ]
  }
];
