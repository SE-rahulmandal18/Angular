import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pureSort',
    pure: true
})
export class PureSortPipe implements PipeTransform {

    transform(array: number[], args?: any) : any {
        return array.sort((a: number, b: number) => b - a); 
    }
}