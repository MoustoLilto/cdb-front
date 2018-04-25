import { CompanyService } from './../company.service';
import { Company } from './../../model/company.model';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent {

  modelForm: FormGroup;
  model: Company;

  constructor(private fb: FormBuilder, private CompanyService: CompanyService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.modelForm = this.fb.group({
      name: ['', Validators.required],
    })
  }

  addCompany(): void {
    this.model = new Company();
    this.model.name = this.modelForm.controls.name.value;
    this.CompanyService.addCompany(this.model).subscribe(() => {
      this.router.navigate(['/companies']);
    });
  }
}
