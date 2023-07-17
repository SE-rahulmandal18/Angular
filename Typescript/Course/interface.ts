interface Human {
    readonly age: number;  // readonly for age property
    walk(): void;
}

interface Person extends Human {
    firstName: string;
    lastName?: string;   // making last name as optional ?
}

// For Object

const user: Person = {
    firstName:  ``,
    //lastName: ``,
    age: 10,
    walk: () => {
        return;
    }
};

class Emplpoyee implements Person {
    firstName: ``;
    age: 10;
    walk(): void {
        return;
    }
}