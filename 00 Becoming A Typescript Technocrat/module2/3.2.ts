{
  // interface

  // type declaration process
  type User1 = {
    name: string;
    age: number;
  };

  // interface declaration process. We can't use '=' sign during this declaration. 
  interface User2 {
    // In previous example we used '=' sign after 'User1' but here we are not using '=' sign after 'User2'.
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string }; // extending type using intersection &.
 
  interface UserWithRole2 extends User1 { // 'extends' is extending extra property of 'User1' in 'UserWithRole2'
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "Persian",
    age: 100,
    role: "manager",
  };

  type rollNumber = number;

  // js --> object , array-> object function -> object

  type Roll1 = number[];

  // interface with array 
  interface Roll2 {
   [index : number ] : number // index is number type data and the value that index holding is also a number type data. 
  }

  // const rollNumber1: Roll2 = [1,2,3]
  //                             0 1 2 --> number type


  // type alias in function
  type Add1 = (num1: number,num2:number)=> number
  
  // interface in function 
  interface Add2 {
    (num1: number,num2:number) : number
  }

  const add: Add2 = (num1 , num2 )=> num1+num2
  
  //
}
