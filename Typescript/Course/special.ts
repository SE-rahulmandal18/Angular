// void

function logToConsole(): void{
    console.log("Hello World");
    return;
}

// Arrays

let fruits: string[];
fruits = ['🍎', `🍏`, "🥭", '🍉'.toUpperCase(), (() => '🍇')()];

let food: Array<string>;
food = ['🍕', '🍔'];

let genericArray: Array<string | number | boolean>;
genericArray = ['🍕', '🍔', 0b10101, 122, true, false];


// Tuple
let coordinates: [number, number, number];
coordinates = [10, 14, 15];

let genTuple: [number, string];
genTuple = [10, '14'];

// Objects

let user = {
    firstName: 'Rahul',
    lastName: 'Mandal',
    username: 'Rahulmandal',
    getUserName: (): string => this.username
}

// Enum

enum DaysOfTheWeek {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY= 'wednesday'
};

let dayToday = DaysOfTheWeek.MONDAY;
 dayToday = DaysOfTheWeek.TUESDAY;


 // any
let authorizesUser: any = {
    firstName: 'Rahul',
    lastName: 'Mandal',
    username: 'Rahulmandal',
};
