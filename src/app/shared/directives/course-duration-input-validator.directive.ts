import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCourseDurationInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CourseDurationInputValidatorDirective,
    multi: true
  }]
})
export class CourseDurationInputValidatorDirective implements Validator {
  // TODO
  @Input() min = 1;
  @Input() max = 200;

  validate(control: import('@angular/forms').AbstractControl): import('@angular/forms').ValidationErrors {
    if (isNaN(+control.value)) {
      return {nan: true};
    }
    if (control.value > 200 || control.value < 1) {
      return {invalid: true};
    }
    return null;
  }
}
