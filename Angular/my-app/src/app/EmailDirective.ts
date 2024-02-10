import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[email-validate]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {
    validate(c: FormControl): ValidationErrors{

        const email = c.value;
        
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isValid =  reg.test(email);
        
        const message = {
            'email': {
                'message': 'Should be a valid email'
            }
        } ;
        return isValid ? null : message;
    }
}


