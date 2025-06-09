import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookSearchService } from './services/book-search.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SearchBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'gutendexA';
  books: any[] = [];

  constructor(private bookSearchService: BookSearchService ) {}


  searchText: string = '';
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);

    // here once the user has pressed enter, we will call the function to search for books
    this.searchBooks(this.searchText);
  }

  searchBooks(query: string) {
    this.bookSearchService.searchBooks(query).subscribe((data) => {
      this.books = data.results;
      // handle the data as needed
    });
  }

}
