import {ErrorHandler, Injectable} from '@angular/core';

@Injectable() 
export class GlobalErrorHandler implements ErrorHandler {

    handleError(error: any, stackTrace = null, resaon = null) : void {

        console.log("error successfully handled");
        console.log("printing error info");
        console.log(error, stackTrace);
        // console.log(error);
        
    }
}