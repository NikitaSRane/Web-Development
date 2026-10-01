import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    {path : 'technologies', component:TechnologyComponent},
    {path : 'books', component:BooksComponent}
];
