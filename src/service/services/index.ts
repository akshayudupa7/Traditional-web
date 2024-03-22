export const getService=async()=>{

    try{
        const data=await fetch('/api/service',{
            method:'GET'
        },
        )
        const res=await data.json()
        return res

    }catch(error){
        console.log(error)
    }
  

}