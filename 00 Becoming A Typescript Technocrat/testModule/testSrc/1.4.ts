{
// Basic data types

// String

// Explicit type -- not define by us
let firstName = 'Farhan' // explicit type define

// Implicit type -- defined by us
let middName :string = 'Ishraq' // implicit type define

//number
let roll:number = 123; 

//boolean
let isAdmin : boolean = true;


//undefined
let x:undefined = undefined;

//null
let y:null = null;


let d; 
/* 
    here no type is defined. So it 'd' can any type of variable like number, string, boolean or any types. 
*/


// Array -----------------------------------------
let friends : string[] = ['Rasel', 'Viper'];
// 'string[]' indicates its a string type array.

let eligibleRoll : number[] = [2,34, 35];
// 'number[]' indicates its a string type array.


// tuple --> array --> order maintained --> type of values
let coordinates : [number, string, boolean] = [1, 'five', true]
/*
    Here, first array value must be 'number type', 2nd would be only 'string type' and 3rd would be 'boolean' type. We have to maintain this order when assigning this value. Otherwise, it will through error.  
*/
const arr: number[] = [1, 2, 3, 4, 5]
const newArr = arr.map((element:number):number => element*element)


// ---------------------------------------------------
// Reference Type --> Object
const user:{
    company: 'Top Tech Link'; 
    // Here, 'Top Tech Link' is literal type.
    firstName:string;
    middleName?:string; // optional type. We can exclude it in object property. 
    lastName:string;
    isMarried:boolean;
} = {
    /*
    company: 'Top Tech' // It will through error as literal type is assigned as 'Top Tech Link'
    */
    company: 'Top Tech Link',
    firstName:'Farhan',
    middleName: 'Ishraq',
    lastName: 'Tushar',
    isMarried:false,
}

/*
user.firstName // We can access any proper by this way.
*/



// ------------------------------------------
// functions

//ex-1: regular function
function add(num1:number, num2:number = 10):number
// here, last 'number' is return type & 10 is the default return value. 
{
    return num1 + num2;
}

//ex-2: arrow function
const addArrow = (num1:number , num2:number):number => num1+num2

// ex-3: object function method
const poorUser = {
    name: "Farhan",
    balance: 0,
    addBalance(balance:number):string{
        return `My balance is ${this.balance + balance};`
    },
}





// Spread Operator ----------------------------------
// In array
const g1:string[] =  ['Tom', 'Jerry', 'Cat', 'Mouse']
const g2:string[] = ['Pen', 'Paper', 'Mouse', 'Pencil']

g1.push(...g2)


// In Object
const food = {
    asian:'Rice' ,
    african: 'Fufu',
    american: 'Tacos',
}
const drinks = {
    asian:'Tea',
    african: 'Karkadé',
    american: 'Sazerac'
}

const totalList = {
    ...food, ...drinks
}



// !!!Research more M1-->1-7--> 7.27min
// Rest Operator -------------------------
const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)

    friends.forEach((friend:string)=>console.log(`Hi ${friend}`));
};
greetFriends('Kaku', 'Newton', 'Maxwell')





// Destructuring -------------------------------
// Object destructuring
const newUser ={
    id:234,
    name:{
        firstName:'Farhan',
        middleName:'Ishraq',
        lastName:'Tushar',
    },
    contact: '000000000000',
    address: 'Birmuda'
}
const {
    contact, 
    name:{middleName:nameAlias},
    // We cannot redeclare 'middleName' type. Instead, we can give it an new alias. 
} = newUser;


// Array destructuring
const myFriends:string[] = ['Kaku', 'Newton', 'Maxwell, Rutherford, Bohr'];

// Way-1 destructuring:
const [a, b, c] = myFriends;
/*
    'a' would take 'Kaku', 'b' would take 'Newton' and 'c' would take 'Maxwell'
*/

// Way-2 destructuring
const [, ,bestFriend, ...rest] = myFriends; 
/*
    1. Here, 'bestFriend' will target only third array element. 

    2. ', ,' will ignore two other element('Kaku', 'Newton') before 'bestFriend'

    3. '...rest' will include other elements(Rutherford, Bohr) after 'bestFriend' into 'rest' variable.  

*/



// Type Alias -----------------------------------------------

const student1: {
    name:string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
} = {
    name: 'Farhan',
    age: 23,
    gender: 'male',
    contactNo: '000000000000000',
    address: 'Birmuda'
}

const student2: {
    name:string;
    age: number;
    gender:string;
    address:string;
}={
    name: 'Ishraq',
    gender: 'male',
    age: 25,
    address: 'triangle'
}

// If we don't want to use same data type each type we can use type alias

type student = { // to declare type we use 'type' + 'any name of type'
    name:string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}

const student3:student ={
    name: 'Tushar',
    gender: 'male',
    age: 25,
    address: 'triangle'
}


// Type Alias in function
type Add = (num1: number, num2:number) => number;
const newAdd: Add = (num1, num2) => num1 + num2;



} 
/*
 * Here '{}' is confining file into a single scope. 

 * This will help to differentiate files under same folder. Otherwise, TS will access all files globally. In that case, same variables in different file would through error. 
 */




