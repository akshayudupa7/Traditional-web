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

export const getEventByCategory=async(id:any)=>{

    try{
        const data=await fetch(`http://localhost:3000/api/event-by-category?id=${id}`,{
            method:'GET'
        },
        )
        const res=await data.json()
        return res

    }catch(error){
        console.log(error)
    }
  

}
export const getEventByName=async(id:any)=>{

    try{
        const data=await fetch(`http://localhost:3000/api/event-by-name?id=${id}`,{
            method:'GET'
        },
        )
        const res=await data.json()
        return res

    }catch(error){
        console.log(error)
    }
  

}