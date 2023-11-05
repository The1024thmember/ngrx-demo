import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from 'src/store/actions/book.action';
import { AppState } from 'src/store/models/app-state.model';
import { BookItem } from '../store/models/bookItem.model';
@Component({
  selector: 'app-root',
  template: `<section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4>Book wish list - Ngrx demo</h4>
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item" *ngFor="let Book of bookItems$ | async">
              <b>{{ Book.author }} - {{ Book.name }}</b> - ( {{ Book.type }} )
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="card p-4 shadow-sm">
            <form #myform="ngForm" (ngSubmit)="addBook(myform)">
              <div class="form-group">
                <label for="id">id</label>
                <input
                  type="text"
                  class="form-control"
                  ngModel
                  name="id"
                  id="id"
                  [ngModel]="bookFormId$ | async"
                  aria-describedby="book id"
                  required
                />
              </div>
              <div class="form-group">
                <label for="author">Author</label>
                <input
                  type="text"
                  class="form-control"
                  ngModel
                  name="author"
                  id="author"
                  aria-describedby="Author"
                  required
                />
              </div>
              <div class="form-group">
                <label for="name">Book Name</label>
                <input
                  type="text"
                  class="form-control"
                  ngModel
                  name="name"
                  id="name"
                  aria-describedby="book name"
                />
              </div>
              <div class="form-group">
                <label for="type">type</label>
                <input
                  type="text"
                  class="form-control"
                  ngModel
                  name="type"
                  id="type"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>`,
})
export class AppComponent implements OnInit {
  bookItems$: Observable<Array<BookItem>> | undefined;
  bookFormId$: Observable<number> | undefined;

  @ViewChild('myform') myForm: NgForm | undefined;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.bookItems$ = this.store.select((store) => store.books);
    this.bookFormId$ = this.store.select(
      (store) => store.books[store.books.length - 1].id + 1
    );

    this.bookFormId$.subscribe((id) => {
      console.log('id:', id);
    });
  }

  //create the method for adding a new Book and then reset the form

  addBook(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value)); // calls the function, interate with the data store
    // what if I have some other action hooked up with the action? saying an api request
    // we can chain the logic inside the reducer function, and do a await async for pushing the new data to BE
    // or we can use effect.
    form.reset();
  }
}
