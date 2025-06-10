import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { GetBookByIdService } from '../services/get-book-by-id.service';
import { TextFetcherService } from '../services/text-fetch.service';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {
  bookId: string | null = null;
  book: Book | null = null;
  bookText: string = '';
  hasSearched = false;
  loading = false;

  constructor(
    private getBookByIdService: GetBookByIdService,
    private route: ActivatedRoute,
    private textFetcher: TextFetcherService
  ) {}
  
  //completes when the page loads
  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    // Now you can use this.bookId to fetch details from your service/API
    this.getBook(this.bookId || '-1'); // default value -1
    
  }

  getBook(query: string) {
    this.loading = true;  // Start loading
    this.getBookByIdService.getBook(query).subscribe({
      next: (data) => {
        this.book = data;
        this.getBookText(this.book!.formats!['text/html']);
      },
      error: () => {
        // Optionally, handle error
      },
      complete: () => {
        this.loading = false;  // End loading
        this.hasSearched = true;
      }
    });
  }

  getBookText(url: string) {
    this.textFetcher.fetchText(url).subscribe({
      next: (text: string) => {
        this.bookText = text;
      },
      error: (err) => {
        // handle error
      }
    });
  }
  
  
}
