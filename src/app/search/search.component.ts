import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component'; 
import { BookListComponent } from '../book-list/book-list.component';
import { BookSearchService } from '../services/book-search.service';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-search',
  imports: [ RouterLink, RouterOutlet, SearchBarComponent, CommonModule, BookListComponent, BookDetailsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  books: any[] = [];
  hasSearched = false;
  loading = false;

  constructor(private bookSearchService: BookSearchService ) {}


  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);

    // here once the user has pressed enter, we will call the function to search for books
    this.searchBooks(this.searchText);
  }

  searchBooks(query: string) {
    this.loading = true;  // Start loading
    this.bookSearchService.searchBooks(query).subscribe({
      next: (data) => {
        this.books = data.results;
      },
      error: (err) => {
        // Optionally, handle error
      },
      complete: () => {
        this.loading = false;  // End loading
        this.hasSearched = true;
      }
    });
  }
}
