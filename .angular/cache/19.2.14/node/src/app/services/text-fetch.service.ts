import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextFetcherService {

  constructor(private http: HttpClient) { }

  /** 
   * Fetches plain text content from the given URL.
   * @param url The direct URL to a .txt or plain-text resource.
   * @returns An Observable<string> with the file's text content.
   */
  fetchText(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
