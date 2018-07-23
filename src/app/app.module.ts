import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http';
import { TickerComponent } from './components/ticker/ticker.component';
import { TickerService } from "./services/ticker.service";


@NgModule({
  declarations: [
    AppComponent,
    TickerComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [TickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
