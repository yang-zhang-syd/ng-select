import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { SelectModule } from './ng-select/ng-select.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
