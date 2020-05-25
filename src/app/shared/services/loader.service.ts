import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading = new Subject<boolean>();

  constructor() { }

  getLoadingStatus() {
    return this.isLoading;
  }

  async show() {
    this.isLoading.next(true);
  }

  async hide() {
    this.isLoading.next(false);
  }
}
