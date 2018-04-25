import { CompanyService } from './../company.service';
import { Company } from './../../model/company.model';
import { Component, Input, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit{

  idBase: string;
  modelForm: FormGroup;
  company: Company;

  constructor(private fb: FormBuilder, private CompanyService: CompanyService, private route: ActivatedRoute, private router: Router){
    this.createForm();
  }

  ngOnInit(){
    this.idBase = this.route.snapshot.paramMap.get('id');
    if(this.idBase) {
      this.getCompany();
    }
  }

  createForm() {
    this.modelForm = this.fb.group({
      name: ['', Validators.required],
    })
  }

  getCompany(){
    this.CompanyService.getCompany(this.idBase).subscribe(data => {
      this.company = data;
    });
  }

  sendRecipe(): void {
    this.company.name = this.modelForm.controls.name.value;
    this.CompanyService.updateCompany(this.company).subscribe(() => {
      this.router.navigate(['/companies']);
    });
  }
}
