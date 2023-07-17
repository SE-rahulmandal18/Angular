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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Aliter
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person("Rahul", "Mandal", 25);
console.log(person.getFullName());
var Emplpoyee = /** @class */ (function (_super) {
    __extends(Emplpoyee, _super);
    function Emplpoyee(id, firstName, middleName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    Object.defineProperty(Emplpoyee.prototype, "employeeId", {
        get: function () {
            return this.id;
        },
        set: function (employeeId) {
            this.id = employeeId;
        },
        enumerable: false,
        configurable: true
    });
    Emplpoyee.prototype.getFullName = function () {
        /*const nameSegment: Array<string> = super.getFullName().split(" ");
        nameSegment.splice(1, 0, this.middleName);
        const fullName = nameSegment.join(" ");
        return `${fullName}`;
        */
        return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
    };
    return Emplpoyee;
}(Person));
var manager = new Emplpoyee(1, "Rahul", "Ch.", "Mandal", 25);
console.log("".concat(manager.getFullName()));
console.log(manager.employeeId);
manager.employeeId = 20;
console.log(manager.employeeId);
