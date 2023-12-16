import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { isbnValidator } from '../shared/isbn-validator.directive';
import { BookRFormErrorMessages } from './book-rform-error-messages';

@Component({
  selector: 'wea5-book-rform',
  templateUrl: './book-rform.component.html',
  styles: [
  ]
})
export class BookRformComponent {

  isUpdatingBook = false;
  myForm!: FormGroup;
  book = new Book();
  errors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bs: BookStoreService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingBook = true;
      // TODO load book
    }
    this.initForm();
  }

  initForm() {
    // TODO

    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    //this.book.author = this.myForm.value.author;
    const book: Book = this.myForm.value;

    if (this.isUpdatingBook) {
      // TODO Update
    } else {
      // TODO Save
    }
  }

  updateErrorMessages() {
    this.errors = {};

    for (const message of BookRFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors != null &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

}
