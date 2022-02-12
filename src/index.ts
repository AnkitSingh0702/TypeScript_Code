//Basic types in TypeScript
let id: number=5
let company: string = 'Ankit Singh'
let ispublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'Hello']



//Tuple: we can put number string boolean any value in the bracket
let person: [number, string, boolean] = [1, 'Hello', true]



//Tuple Array
let employee: [number,string] [] //example of tupple array

employee = [
    [1, 'xyz'],
    [2, 'abc'],
    [3, 'tyt'],
]



//Union allows us to use more than one data type for a variable or a function parameter
let pid: string | number 
pid = '22'




//Enum
enum Direction1{
    up = 1,
    Down,
    Left,
    Right
}
// console.log(Direction1.Left)
// console.log(Direction1.Right);
// console.log(Direction1.up);
// console.log(Direction1.Down);
enum Direction2 {
    up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}
// console.log(Direction2.up)
// console.log(Direction2.Down);
// console.log(Direction2.Left);
// console.log(Direction2.Right);




//Object
type User ={
    id : number,
    name: string
}

const user : User = {

    id:1,
    name:'John'
}

//Type Assertion: type assertion is a mechanism which tells the compiler about the type of a variable
let cid: any = 1
// let customerid = <number>cid
let customerid = cid as number




//Function
function addNum(x: number , y: number): number {
return x + y
}
// console.log(addNum(1,2));



//Void return type function 
function print(message:string | number): void{
    console.log(message);
}

// console.log(sum(45,82));
// print('Hello world');
// print(45);





//Interface
interface UserInterface {
    readonly id : number,
    name: string
    age? : number
}

const user1 : UserInterface = {

    id:2,
    name:'abcd'
}
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (s: number, y: number): number => x+ y
const sub: MathFunc = (s: number, y: number): number => x- y






//Implementing interface in class
interface PersonInterface {
    id : number,
    name: string
    
}


//Classes
class Person implements PersonInterface{ 
    id: number
    name: string

    constructor(id: number, name: string) {
    this.id = id;
    this.name = name
        
    }
}
const brad = new Person(1, 'Ankit Singh')
const mike = new Person(2 , 'React Native')

// console.log(brad, mike)



//Data Modifier: This is public by default we can vhnaged it into private or protected as well
class Person1{ 
    id: number  //if we use private in this we can only acess  only in the class // protected means we can acess only this class or extended from this class 
    name: string

    constructor(id: number, name: string) {
    this.id = id;
    this.name = name
        
    }
    
}
const abc = new Person(1, 'Ankit Singh')
const xyz = new Person(2 , 'React Native')
// console.log(abc, xyz)


//Extendidng Classes(sub class)
class Employee extends Person{
    position: string

    constructor(id:number, name: string, position: string) {
super(id, name);
this.position = position
    }
}
const employe = new Employee(3,'Honda','Me');
// console.log(employe)





//Generics Part
function gen<T>(item:T[]): T[]{
    return new Array().concat(item);
}

let numarr = gen<number>([1,2,3,5]);
let starr = gen<string>(['hello','hii','bbye']);

console.log(numarr);
console.log(starr); 

function sum(arg0: number, arg1: number): any {
    throw new Error("Function not implemented.")
}

