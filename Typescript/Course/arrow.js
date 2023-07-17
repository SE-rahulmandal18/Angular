function greetUser(name) {
    console.log("Hello ther, ".concat(name));
}
var greetUserByName = function (name) {
    console.log("Hello there ".concat(name));
};
greetUser('John');
greetUserByName('Jane');
// Arrow function
var greetUserByNameArrow = function (name) {
    return console.log("Hello there, ".concat(name));
};
greetUserByNameArrow("Jacob");
var edible = [
    {
        edible: "\uD83C\uDF55",
        isVegan: false
    },
    {
        edible: "\uD83C\uDF55",
        isVegan: false
    },
    {
        edible: "\uD83C\uDF55",
        isVegan: true
    },
    {
        edible: "\uD83C\uDF55",
        isVegan: true
    }
];
console.log(edible.filter(function (item) {
    return item.isVegan;
}));
// Using Arrow Function
console.log(edible.filter(function (item) { return item.isVegan; }));
// Arrow function solves rescoping of this keyword
var user = {
    firstName: "John",
    lastName: "Doe",
    lazyGreet: function () {
        var that = this;
        setTimeout(function () {
            console.log("Hey there, ".concat(that.firstName));
        }, 1000);
    }
};
// Arrow function solves rescoping of this keyword
var User = {
    firstName: "John",
    lastName: "Doe",
    lazyGreet: function () {
        var _this = this;
        setTimeout(function () { return console.log("Hey there, ".concat(_this.firstName)); }, 1000);
    }
};
user.lazyGreet();
User.lazyGreet();
