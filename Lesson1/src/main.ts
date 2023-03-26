let username = 'jaseel'
console.log(`Hello ${username}`)
let a: number = 6
let b: string = '2'
let c: number = a / 2
console.log(c)
// implicit type
let myName: string
myName = 'Jaseel'
// This is legal in javascript but not typescript
// myName = 24
// explicit type
let myAge: number = 24
// If the type is any then it can be anything
let album: any = 'The Wall'
album = 24

// function example
// if you don't specify the paramter type then it will be any
const sum = (a: number, b: number) => {
  return a + b
}
// you can also create a union type
let postId: string | number = '123'
let isActive: boolean | number = true
// create an example RegExp type
let regExp: RegExp = /abc/
// create an example array type
let myArray: number[] = [1, 2, 3]
// create an example tuple type
let myTuple: [number, string] = [1, '2']
