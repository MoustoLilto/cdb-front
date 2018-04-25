import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './company.service';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  declarations: [
    CompanyComponent,
    CompanyEditComponent,
    CompaniesComponent,
    CompanyAddComponent
  ],
  providers: [
    CompanyService
  ],
  exports: [
    CompanyComponent
  ]
})
export class CompanyModule { }
