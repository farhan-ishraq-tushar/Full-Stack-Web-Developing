{
  // constraints -> means enforcing rules 

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string } 
    /*
      Here, 'extends { id: number; name: string; email: string }'
      means any object that is sent to 'addCourseToStudent' must have
      property type of 'id: number; name: string; email: string'. As we
      we are enforcing specific type to the property, it is called 
      constraints.   
    */
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,
    name: "Mr. Z",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
