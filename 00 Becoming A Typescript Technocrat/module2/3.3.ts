{
  // generic type: generating types dynamically and reusing them as our need

  type GenericArray<T> = Array<T>; 
  /*
   Here, 'T' is the parameter. It is always inside '<>'. 
   This parameter can be string, number or boolean based on situation.

   'GenericArray<T> = Array<T>' means whenever we use 'GenericArray' it will indicate an 'array'. 
   Parameter inside <> will indicate weather this array is number, string or boolean. At first 
   generic declaration we use 'T' inside <>. But when we use in example this 'T' will be replaced
   by number, string or boolean according to need as shown in example:
   const rollNumbers: GenericArray<number> = [3, 6, 8];
  */

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(30, 20);

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    /* 
      'Tuple' usually applies in array. Here in generic tuple the 1st element of array
      is 'number type' and the 2nd parameter is 'object type' where elements of the 
      objects are 'string type'
    */
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];
}
