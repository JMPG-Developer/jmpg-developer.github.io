import { Injectable } from '@angular/core';
import { _books, Books } from '../../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public getBooks(): Books {
    return _books;
  }
  
}
