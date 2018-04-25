import { Company } from './../../model/company.model';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[]

  constructor(private CompanyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies():void {
    this.CompanyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  deletedCompany(company: Company){
    const indexCompany = this.companies.indexOf(company);
    this.companies.splice(indexCompany, 1);
  }
}
