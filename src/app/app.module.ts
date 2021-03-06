import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { ClassButtonComponent } from './class-button/class-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PageNotFoundComponent,
    HomeComponent,
    NewCharacterComponent,
    ClassButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
