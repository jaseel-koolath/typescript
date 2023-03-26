// Great the world
var ms = 'Hello World!';
// This is an industrial grade general purpose greeter function
function great(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
great('Jaseel', new Date());
