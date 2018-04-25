import { Company } from './../model/company.model';
import { CompanyService } from './company.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  @Input() company: Company;
  @Output() deletedCompany: EventEmitter<Company> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private CompanyService: CompanyService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/rubbish-bin-delete-button.svg'));
  }

  deleteRecipe() {
    this.CompanyService.rmCompany(this.company.id).subscribe(() => {
      this.deletedCompany.emit(this.company);
    });
  }
}
