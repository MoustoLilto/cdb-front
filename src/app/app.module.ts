import { HeaderModule } from './header/header.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CustomMaterialModule,
    BrowserModule,
    HeaderModule,
    CompanyModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
