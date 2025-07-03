import { CommonModule } from '@angular/common';
import { Component  ,signal ,computed } from '@angular/core';
import { CountryserveService } from '../countryserve.service';

@Component({
  selector: 'app-countrytable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countrytable.component.html',
  styleUrl: './countrytable.component.css'
})
export class CountrytableComponent {
   searchText = signal('');
  currentPage = signal(1);
  pageSize = 5;

  constructor(private countryService: CountryserveService) {}

  get filteredData() {
    return this.countryService.searchCountries(this.searchText());
  }

  get paginatedData() {
    return this.countryService.paginate(this.filteredData, this.currentPage(), this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchText.set(input.value);
    this.currentPage.set(1); // Reset to first page on new search
  }

  nextPage() {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update(v => v + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(v => v - 1);
    }
  }
}
