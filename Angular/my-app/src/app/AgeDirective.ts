import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[age-validate]',
    providers: [{provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true}]
})
export class AgeValidatorDirective implements Validator {
    validate(c: FormControl): ValidationErrors{

        const num= Number(c.value);
        
        const isValid = !isNaN(num) && num >= 18 && num <= 85;
        
        const message = {
            'age': {
                'message': 'The age must be a valid number between 18 and 85'
            }
        } ;
        return isValid ? null : message;
    }
}