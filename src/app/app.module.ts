import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    ProductComponent
  ],
  providers: [
  ],
  bootstrap: [
    ProductComponent
  ]
})
export class AppModule { }
