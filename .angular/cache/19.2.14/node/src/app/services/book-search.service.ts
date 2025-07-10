import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  private apiUrl = 'https://gutendex.com/books/';

  constructor(private http: HttpClient) {}

  // This function returns an Observable that the component can subscribe to
  searchBooks(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?search=${encodeURIComponent(query)}`);
  }
}
