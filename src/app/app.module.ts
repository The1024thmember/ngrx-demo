import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookEffects } from 'src/store/effects/book-effects';
import { BookReducer } from 'src/store/reducers/book.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreDevtoolsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      books: BookReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([BookEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
