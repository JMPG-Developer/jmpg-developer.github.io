import { Component } from '@angular/core';
import { _books, Book, Books } from '../../models/books';
import { Action } from 'rxjs/internal/scheduler/Action';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-library',
  imports: [],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {

  public selectedBook:Book | null = null;
  public books:Books;

  constructor(booksService: BooksService) {
    this.books = booksService.getBooks();
  }

  public selected(book:Book):void{
    this.selectedBook = book;
  }

}