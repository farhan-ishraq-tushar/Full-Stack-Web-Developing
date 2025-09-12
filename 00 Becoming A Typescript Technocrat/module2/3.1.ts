{
  //

  // type assertion -> Specifying type by developer. For type assertion process: (nameOfVariable + as + typeName)  
  let anything: any;

  anything = "Next Level Web Development";
  // (anything as string). As we inserted string value to 'anything' we can type assert anything as string. Now, if we use '.' after the bracket VS code will show its suggestions for string operation of JS.     

  anything = 222;
  // (anything as number).     

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number; // Type assertion. As, we are sending number type data the return of kgToGm would be a number. So, we can assert result11 type as number. 
  const result2 = kgToGm("1000");

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
