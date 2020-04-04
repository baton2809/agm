import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {

  @Input() id2delete: number;
  @Output() closes = new EventEmitter();
  @Output() confirm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClosePopup() {
    this.closes.emit();
  }

  onConfirmPopup() {
    this.confirm.emit(this.id2delete);
  }
}
