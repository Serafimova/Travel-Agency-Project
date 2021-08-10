import { AbstractControl, ValidationErrors } from "@angular/forms";

export function URLValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) { return null; }
  const pattern = /^http(s?):\/\/www/;
  return pattern.test(control.value) ? null : {
    invalidImageURL: true
  };
}

