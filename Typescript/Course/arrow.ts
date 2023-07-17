function greetUser(name: string) {
    console.log(`Hello ther, ${name}`);
}

const greetUserByName = function(name: string) {
    console.log(`Hello there ${name}`);
};

greetUser('John');
greetUserByName('Jane');

// Arrow function

const greetUserByNameArrow = (name: string) => 
console.log(`Hello there, ${name}`);
greetUserByNameArrow(`Jacob`);

const edible = [
    {
        edible: `🍕`,
        isVegan:false
    },
    {
        edible: `🍕`,
        isVegan:false
    },
    {
        edible: `🍕`,
        isVegan:true
    },
    {
        edible: `🍕`,
        isVegan:true
    }
];

console.log(edible.filter(function(item) {
     return item.isVegan;
})
);

// Using Arrow Function
console.log(edible.filter(item => item.isVegan));


// Arrow function solves rescoping of this keyword

const user = {
    firstName: `John`,
    lastName: `Doe`,
    lazyGreet: function() {
        const that = this;
        setTimeout(function() {
            console.log(`Hey there, ${that.firstName}`);
        }, 1000);
          
    }
};

// Arrow function solves rescoping of this keyword

const User = {
    firstName: `John`,
    lastName: `Doe`,
    lazyGreet: function() {
        setTimeout(() => console.log(`Hey there, ${this.firstName}`), 1000);
          
    }
};

user.lazyGreet();
User.lazyGreet();


