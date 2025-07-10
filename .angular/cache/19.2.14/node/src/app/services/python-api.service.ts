import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PythonAPIService {
  apiUrl = 'http://localhost:5000/analyze-text';

  constructor(private http: HttpClient) {}

  analyzeText(text: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { text });
  }
}
