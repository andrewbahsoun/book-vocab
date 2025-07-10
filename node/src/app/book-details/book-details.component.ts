import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { GetBookByIdService } from '../services/get-book-by-id.service';
import { TextFetcherService } from '../services/text-fetch.service';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';
import { PythonAPIService } from '../services/python-api.service';

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
  vocabLoading = true;
  analysisResult: any;


  constructor(
    private getBookByIdService: GetBookByIdService,
    private route: ActivatedRoute,
    private textFetcher: TextFetcherService,
    private textAnalysis: PythonAPIService
  ) {}
  
  //completes when the page loads
  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    // Now you can use this.bookId to fetch details from your service/API
    this.getBook(this.bookId || '-1'); // default value -1
    if (this.bookText && this.bookText.trim().length > 0) {
      this.analyze(this.bookText);
    }
    
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

  analyze(text: string) {
    this.textAnalysis.analyzeText(text).subscribe(result => {
      this.analysisResult = result;
      this.vocabLoading = false;
    });
  }

  getGroupedWords(words: string[], groupSize: number): string[][] {
  let groups = [];
  for (let i = 0; i < words.length; i += groupSize) {
    groups.push(words.slice(i, i + groupSize));
  }
  return groups;
}

getColorClass(index: number): string {
  if (index < 10) return 'word-top10';
  if (index < 30) return 'word-top30';
  if (index < 60) return 'word-top60';
  return 'word-other';
}

  
  
}
