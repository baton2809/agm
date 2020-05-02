import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/user/services/authorization.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumb: string;
  private rootPath: string;
  private id: string;

  constructor(public authService: AuthorizationService, private route: ActivatedRoute, private router: Router) {
    this.route = route;
  }

  ngOnInit(): void {
    const rootPath = this.route.routeConfig ? this.route.routeConfig.data[ `breadcrumb` ] : '/';
    this.breadcrumb = rootPath;
    this.rootPath = rootPath;
    const paramName = this.route.routeConfig ? this.route.routeConfig.data[ `paramName` ] : null;
    if (paramName) {
      this.route.params.subscribe((v) => {
        this.id = v[paramName];
      });
      this.breadcrumb += '/' + this.id;
    }
  }

  goHome() {
    this.router.navigate(['/courses'], { relativeTo: this.route });
  }

}
