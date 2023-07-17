/*
class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor (firstName: string, lastName: string, age: number) {
        this.firstName  =firstName,
        this.lastName = lastName,
        this.age = age;
    }

    getFullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}


const person: Person = new Person(`Rahul`, `Mandal`, 25);
console.log(person.getFullName());
*/


 // Aliter
 
class Person {
  
    constructor (
       protected firstName: string, 
       protected lastName: string,
       protected  age: number) {}

    getFullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person: Person = new Person(`Rahul`, `Mandal`, 25);
console.log(person.getFullName());

class Emplpoyee extends Person{

   get  employeeId(): number {
       return this.id;
   }

   set employeeId(employeeId: number) {
    this.id =  employeeId;
   }


    constructor (
        private id: number,
        firstName: string, 
        private middleName: string, 
        lastName: string,
        age: number 
        ) {
            super(firstName, lastName, age);
        }


        getFullName(): string {
            /*const nameSegment: Array<string> = super.getFullName().split(" ");
            nameSegment.splice(1, 0, this.middleName);
            const fullName = nameSegment.join(" ");  
            return `${fullName}`;
            */
           return `${this.firstName} ${this.middleName} ${this.lastName}`;
        }
 }

const manager: Emplpoyee = new Emplpoyee(1, `Rahul`, `Ch.`, `Mandal`, 25);
console.log(`${manager.getFullName()}`);
console.log(manager.employeeId);
manager.employeeId = 20;
console.log(manager.employeeId);

 
