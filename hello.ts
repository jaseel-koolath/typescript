// Great the world
let ms = 'Hello World!'

// This is an industrial grade general purpose greeter function
function great(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

great('Jaseel', new Date())
