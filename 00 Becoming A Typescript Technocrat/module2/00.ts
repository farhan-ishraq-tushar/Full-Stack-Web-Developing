{
 // Promise

 const createPromise = ()=> {
    return new Promise((resolve, reject) =>{
        const data:string = "something";
        if(data){
            resolve(data)
        }else{
            reject('Failed to load data')
        }
    })
 }
 
 const showData = async()=>{
    const data = await createPromise();
    console.log(data);
 }
 
 showData;

 
 
 
 //
}