import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error-comp',
    template: `
    <button type="button" (click)="buttonClicked()"> Throw
    me some exeption please.</button>

    <button type="button" (click)="button2Clicked()"> Throw
    me some other exeption please.</button>
    
    `
})

export class ErrorCmp {
    
    buttonClicked()
    {
        console.log('yes, the button was clicked');
        throw new Error('Some Exception');
    }

    button2Clicked()
    {
        console.log('yes, the button was clicked');
        throw new Error('Some other Exception');
    }
}