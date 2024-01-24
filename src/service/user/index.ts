export const addUser=async(formData:any)=>{
  
    try{
      const res=await fetch('http://localhost:3000/api/register',{
        method:"POST",
        headers:{
            "content-type":"application/json",
          
     },
        body:JSON.stringify(formData)

      })
      const finaldata=await res.json()
      return finaldata
    }catch(error){
        console.log(error)
    }
}