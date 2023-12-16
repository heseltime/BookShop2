import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';

@Component({
  selector: 'wea5-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private bs: BookStoreService) { }


  isLoading: boolean = false;
  foundBooks: Book[] = [];
  @Output() bookSelected = new EventEmitter<Book>();

  ngOnInit() {

  }

}
