import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppRouterModule } from '../app-router/app-router.module';

import { AppComponent } from '../app.component';
import { PersonComponent } from '../person/person.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    PersonComponent,
    PageNotFoundComponent,
    HomeComponent
  ]
})
export class HomeModule { }
