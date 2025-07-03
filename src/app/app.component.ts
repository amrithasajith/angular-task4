import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { CountrytableComponent } from "./countrytable/countrytable.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveformComponent, CountrytableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serviceInjection';
}
