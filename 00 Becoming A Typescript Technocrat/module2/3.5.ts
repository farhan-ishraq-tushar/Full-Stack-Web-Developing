{
  // function with generics

  // Function with type alias
  const createArray = (param: string): string[] => { 
    // 'string[]' means return type of createArray function is string type array
    return [param]; 
    // "[param]" means function is returning string type array.
  };
  const res1 = createArray("Bangladesh");
   
// ------------------------------------------------------------------------

  // Function with generic type
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  // console.log(resGeneric);

// ---------------------------------------------------------------
  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  
// -------------------------------------------------------------------------
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });


  // ------------------------------------------------------------------------
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
