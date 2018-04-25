import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './../custom-material/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
