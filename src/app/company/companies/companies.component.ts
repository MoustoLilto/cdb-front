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
  NbreCompany: number

  constructor(private CompanyService: CompanyService) {
  }

  ngOnInit() {
    this.getNbreCompany();
    this.getCompanies();
  }

  getCompanies():void {
    this.CompanyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  getNbreCompany(){
    this.CompanyService.getNbreCompany().subscribe(data => {
      this.NbreCompany = data;
    });
  }

  deletedCompany(company: Company){
    const indexCompany = this.companies.indexOf(company);
    this.companies.splice(indexCompany, 1);
    this.NbreCompany--;
  }
}
