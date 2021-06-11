import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MenubarModule} from 'primeng/menubar';
import {SharedModule} from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonChromeComponent } from './common-chrome/common-chrome.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonChromeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
