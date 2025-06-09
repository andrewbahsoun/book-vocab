import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookSearchService } from './services/book-search.service';
import { BookDetailsComponent } from "./book-details/book-details.component";

@Component({
  selector: 'app-root',
  imports: [ RouterLink, RouterOutlet, HeaderComponent, SearchBarComponent, CommonModule, BookListComponent, BookDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'gutendexA';
}
