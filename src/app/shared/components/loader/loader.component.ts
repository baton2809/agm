import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  isLoading: Subject<boolean> = this.loaderService.getLoadingStatus();

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {
  }
}
