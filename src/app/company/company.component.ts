import { Company } from './../model/company.model';
import { CompanyService } from './company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[];
  company: Company;
  nbr: Number;
  companyAdd: Company;
  companyUpdate: Company;

  constructor(private CompanyService: CompanyService) { }

  ngOnInit() {
    //this.getCompanies();
    //this.getCompany();
    //this.getNbreCompany();
  }

  showCompany(): void {
    // for(let company of this.companies){
    //   console.log("id: " + company.id);
    //   console.log("name: " + company.name);
    // }

    //   console.log("id: " + this.company.id);
    //   console.log("name: " + this.company.name);

    //console.log("number: " + this.nbr);
  }

  getCompany(): void {
    this.CompanyService.getCompany(5).subscribe(data => {
      this.company = data;
    });
  }

  getCompanies() {
    this.CompanyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  getNbreCompany(){
    this.CompanyService.getNbreCompany().subscribe(data => {
      this.nbr = data;
    });
  }
}
