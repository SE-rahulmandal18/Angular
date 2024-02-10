import { AbstractControl, AbstractControlDirective } from '@angular/forms';

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'errors',
    template: `
    <ul *ngIf="showErrors()">
    <li style="color: red" *ngFor="let error of errors()">{{error}}</li>
    </ul>
    `
})

export class ErrorsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    private static readonly errorMessages = {
        'required': () => 'This field is required',
        'minlength': (params) => 'This min number of characters is ' + params.requiredLength,
        'maxlength': (params) => 'This max allowed number of characters is ' + params.requiredLength,
        'pattern': (params) => 'This required pattern is ' + params.requiredPattern,
        'age =': (params) => params.message,
        'email =': (params) => params.message,
    }

    @Input() control: AbstractControlDirective | AbstractControl;

    showErrors(): boolean {
        return this.control &&
        this.control.errors &&
        (this.control.dirty || this.control.touched);
    }

    errors(): string[]
    {
        return Object.keys(this.control.errors)
        .map(field => this.getMessage(field, this.control.errors[field]));
    }

    private getMessage(type: string,  params: any) {
        return ErrorsComponent.errorMessages[type](params)
    }
}