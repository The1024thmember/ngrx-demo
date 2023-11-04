import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CourseReducer } from 'src/store/reducers/course.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CourseEffects } from 'src/store/effects/course-effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreDevtoolsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      courses: CourseReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([CourseEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
