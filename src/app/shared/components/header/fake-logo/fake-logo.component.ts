import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fake-logo',
  templateUrl: './fake-logo.component.html',
  styleUrls: ['./fake-logo.component.sass']
})
export class FakeLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['courses']);
  }

}
