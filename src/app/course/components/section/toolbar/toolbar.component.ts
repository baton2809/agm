import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @Input() filter: string;
  @Output() searchCourses = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFindCourses(text2search: string) {
    console.log('>> ' + text2search);
    this.searchCourses.emit(text2search);
  }

  addCourse() {
    this.router.navigate(['add']);
  }

}
