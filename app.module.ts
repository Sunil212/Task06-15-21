import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DescriptionPipe } from './description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
