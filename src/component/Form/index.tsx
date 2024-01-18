import React from 'react'



interface FormProps {
    type: string; 
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  
export default function Index({type,label,value,onChange}: FormProps) {
  return (
    <div style={{marginTop:"10px",width:"100%"}}>
        <div style={{marginBottom:"10px",marginTop:"20px"}}>
        <label style={{color:"#fff",fontSize:"14px",}}>{label}</label>
        </div>
   
        <div>
        <input 
        style={{width:"100%",height:"30px"}}
        type={type}
        value={value}
        onChange={onChange}
        />
        </div>
     
    </div>
  )
}
