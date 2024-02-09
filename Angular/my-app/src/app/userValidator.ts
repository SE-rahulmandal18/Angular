import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, map, timer, switchMap } from "rxjs";

const URL = 'https://jsonplaceholder.typicode.com'; 

@Injectable({
    providedIn: 'root'
})
export class UserValidators {

    constructor(private http: HttpClient) {}

    searchUser(text: any) {
        //debounce
        return timer(1000)
        .pipe(
            switchMap(() => {
                //chekc if username is available
            return this.http.get<any>(`${URL}/user?username=${text}`)
            })
        );
    }


    UserValidators() : AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null > =>
      {
        return this.searchUser(control.value)
        .pipe(
            map(res => {
                // if username is already taken
                if(res.length)
                {
                    return { 'userNameExist': true};
                }
                else
                {
                     {return null}
                }
            })
        );
      };
    }
}