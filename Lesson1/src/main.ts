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

let stringArr = ['a', 'b', 'c']
let numberArr = [1, 2, 3, 'jaseel']
let booleanArr = [true, false, true]

stringArr.push(2)
// this will throw an error because the array is a string array
stringArr[0] = 2

numberArr[0] = 'me'
// this is fine because the array is a number or string array

stringArr = numberArr
// this will throw an error because the array is a string array
numberArr = stringArr
// this is fine because the array is a number or string array

// create an emepty array
let test = []
let band: string[] = []
let myTuple: [number, string, boolean] = [1, '2', true]
let mixed = ['hello', 1, true]

mixed = myTuple // this is fine because mixed can accept in any order
myTuple = mixed // this is not fine because myTuple is a tuple and must be in order

//object
let myObj = {
  name: 'Jaseel',
  age: 24,
}
myObj = mixed

type userData = {
  name?: string
  age?: number
  email: string
  address: {
    city: string
    state: string
  }
  albums: (string | number)[]
}

// instead of a type we can also use an interface
interface userData2 {
  name: string
  age?: number
  email: string
  address: {
    city: string
    state: string
  }
  albums: (string | number)[]
}

let jaseel: userData = {
  name: 'Jaseel',
  // age: 24,
  email: '',
  address: {
    city: 'San Francisco',
    state: 'CA',
  },
  albums: ['The Wall', 1],
}
const printUser = (user: userData) => {
  console.log(user.name?.toUpperCase())
  console.log(user?.age)
  console.log(user.email)
  console.log(user.address.city)
  console.log(user.address.state)
  console.log(user.albums)
  return user.name?.toUpperCase()
}

//Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U)
console.log(Grade.D)
console.log(Grade.C)
console.log(Grade.B)
console.log(Grade.A)
