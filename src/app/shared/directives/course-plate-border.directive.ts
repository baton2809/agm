import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCoursePlateBorder]'
})
export class CoursePlateBorderDirective implements OnChanges {

  @Input('appCoursePlateBorder') creationDate: Date;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('Directive - Constructor');
  }

  ngOnChanges() {
    console.log('Directive - onChanges');
    const now = Date.now();
    const currentDate = new Date(now);
    const draftPeriod = new Date(now);
    draftPeriod.setDate(draftPeriod.getDate() - 14);

    if (this.creationDate < currentDate && (this.creationDate >= draftPeriod)) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid green');
    } else if (this.creationDate > currentDate) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid blue');
    } else {
      console.log(this.creationDate);
      console.log(currentDate);
    }
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.elementRef.nativeElement.style.backgroundColor = 'red'
  // }

}
