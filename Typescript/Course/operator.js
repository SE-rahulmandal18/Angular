// Array
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Fruits = ['🍎', "\uD83C\uDF4F", "🥭"];
var Food = ['🍕', '🍔'];
var edibles = __spreadArray(__spreadArray([], Fruits, true), Food, true);
console.log("Go to the edibles as:", edibles);
// Object
var User = {
    firstName: 'Rahul',
    lastName: 'Mandal',
    username: 'Rahulmandal',
};
var userDetails = __assign(__assign({}, User), { address: "123 BKSC St.", email: "rahul12056@gmai.com" });
console.log("Got the user as: ", userDetails);
// Functions
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log("Got the sum of all the numbvers as: ", add.apply(void 0, numbers));
// Backticks
console.log("The user with name: " + User.firstName +
    " has an address of: " + userDetails.address +
    " and an email of " + userDetails.email);
console.log("The user with name: ".concat(User.firstName, " \n            has an address of: ").concat(userDetails.address, "\n            and an email of ").concat(userDetails.email, "\n"));
// Destructure
var fName = User.firstName, lName = User.lastName;
console.log(fName);
console.log(lName);
// Array Destructure
var apple = Fruits[0], greenApple = Fruits[1], mangoe = Fruits[2];
console.log(apple);
console.log(greenApple);
console.log(mangoe);
var justApple = edibles[0], restEdibles = edibles.slice(1);
console.log(justApple);
console.log(restEdibles);
var firstName = userDetails.firstName, restUserDetails = __rest(userDetails, ["firstName"]);
console.log(firstName);
console.log(restUserDetails);
function getEdibles(apple) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log(apple);
    console.log(restEdibles);
}
getEdibles.apply(void 0, edibles);
