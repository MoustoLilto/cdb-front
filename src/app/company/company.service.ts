import { Company } from './../model/company.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  cdbURl = "http://10.0.1.96:8080/webapp/companies";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.cdbURl);
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(this.cdbURl+"/"+id);
  }

  getNbreCompany(): Observable<number>{
    return this.http.get<number>(this.cdbURl+"/nombre");
  }

  rmCompany(id: number): Observable<Company>{
    return this.http.delete<Company>(this.cdbURl+"/delete/"+id);
  }

  addCompany(company: Company): Observable<Company>{
    return this.http.post<Company>(this.cdbURl+"/create", company);
  }

  updateCompany(company: Company): Observable<Company>{
    return this.http.post<Company>(this.cdbURl+"/update", company, this.httpOptions);
  }
  
}
