import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {
  bookId: string | null = null;
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    // Now you can use this.bookId to fetch details from your service/API
  }
  
  title = 'name of book';
}
