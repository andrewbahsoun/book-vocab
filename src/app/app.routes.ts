import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', component: SearchComponent}, // default route
    { path: 'book-detail', component: BookDetailsComponent},
];
