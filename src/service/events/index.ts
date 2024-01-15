export const getEvent=async()=>{

    try{
        const data=await fetch('http://localhost:3000/api/events',{
            method:'GET'
        },
        )
        const res=await data.json()
        return res

    }catch(error){
        console.log(error)
    }
  

}