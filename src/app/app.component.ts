import { Component, OnInit } from '@angular/core';
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
          <h4>Angular State Management</h4>
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item" *ngFor="let Book of BookItems$ | async">
              {{ Book.name }}: <b>{{ Book.department }}</b>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="card p-4 shadow-sm">
            <form #myform="ngForm" (ngSubmit)="addBook(myform)">
              <div class="form-group">
                <label for="name">Identity</label>
                <input
                  type="text"
                  class="form-control"
                  ngModel
                  name="id"
                  id="id"
                  aria-describedby="identity"
                  required
                />
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  ngModel
                  name="name"
                  id="name"
                  aria-describedby="name"
                />
              </div>
              <div class="form-group">
                <label for="department">Department</label>
                <input
                  type="text"
                  class="form-control"
                  ngModel
                  name="department"
                  id="department"
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
  BookItems$: Observable<Array<BookItem>> | undefined;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    console.log('here');
    this.BookItems$ = this.store.select((store) => store.Books);
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
