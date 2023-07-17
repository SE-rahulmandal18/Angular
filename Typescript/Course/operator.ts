// Array

let Fruits: Array<string>  = ['🍎', `🍏`, "🥭"];
let Food: string[]= ['🍕', '🍔'];
let edibles: Array<String> = [...Fruits, ...Food];

console.log("Go to the edibles as:", edibles);

// Object

let User = {
    firstName: 'Rahul',
    lastName: 'Mandal',
    username: 'Rahulmandal',  
};
let userDetails = {
    ...User,
    address: "123 BKSC St.",
    email: "rahul12056@gmai.com"
};
console.log("Got the user as: ", userDetails);

// Functions

function add(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

let numbers: Array<number> = [1, 2, 3];

console.log("Got the sum of all the numbvers as: ", add(...numbers));

// Backticks

console.log("The user with name: "+ User.firstName + 
           " has an address of: " + userDetails.address + 
           " and an email of " + userDetails.email );

console.log(`The user with name: ${User.firstName} 
            has an address of: ${userDetails.address}
            and an email of ${userDetails.email}
`);     


// Destructure

let { firstName: fName, lastName: lName } = User;
console.log(fName);
console.log(lName);

// Array Destructure

let [apple, greenApple, mangoe] = Fruits;

console.log(apple);
console.log(greenApple);
console.log(mangoe);

let [ justApple, ...restEdibles  ] = edibles;

console.log(justApple);
console.log(restEdibles);

let { firstName, ...restUserDetails} = userDetails;
console.log(firstName);
console.log(restUserDetails);
function getEdibles(apple?, ...restEdibles) {
    console.log(apple);
    console.log(restEdibles);
}

getEdibles(...edibles);

