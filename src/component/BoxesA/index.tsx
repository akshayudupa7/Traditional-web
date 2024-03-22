import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";

// Define an interface for the expected structure of the 'data' prop
interface DataProps {
  name: string;
  imageUrl: string; // Corrected to lowercase 'string'
  description: string;
  para: string;
  price: number;
  help: string;
  icon: string;
}

// Use the defined interface as the type for the 'data' prop
export default function Index({ data }: { data: DataProps }) {
  return (
    <div style={{ width: "100%", marginTop: "60px"}}>
      <Box
        sx={{
          width: "96%",
        
          padding: "40px 0px",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center",height:"200px"}}>
          <Image src={data.imageUrl} width={100} height={60} layout="responsive" alt="this is image" />
        </Box>
          <Box sx={{marginTop:"20px",marginBottom:"20px"}}>
            <Image src="https://www.harigurus.com/assets/images/rating.png" alt="this is image" width={100} height={20}/>
          </Box>
        <Typography
          sx={{ color: "#fff", fontSize: "18px" }}
        >
          {data.name}
        </Typography>

    

   
      </Box>
    </div>
  );
}
