function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Palak", lastName: "Garg" };
var result = greeter(user);
console.log(result);
