export const getService=async()=>{

    try{
        const data=await fetch('http://localhost:3000/api/service',{
            method:'GET'
        },
        )
        const res=await data.json()
        return res

    }catch(error){
        console.log(error)
    }
  

}