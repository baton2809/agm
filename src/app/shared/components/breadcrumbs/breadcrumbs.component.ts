import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/user/services/authorization.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(public authService: AuthorizationService) { }

  ngOnInit(): void {
  }

}
