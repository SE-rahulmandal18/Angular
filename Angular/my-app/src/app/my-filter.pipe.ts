import { Pipe, PipeTransform } from '@angular/core';
import { User } from './User';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: User[], filterString: string,  property: string) : User[] {
    console.log('pipe run');
    if(value.length == 0 || !filterString) {
      return value;
    }
    let filteredUsers: User[] = [];
    for (let user of value) {
      if (user[property as keyof User].toString().toLowerCase().
      includes(filterString.toLowerCase())) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }

}
