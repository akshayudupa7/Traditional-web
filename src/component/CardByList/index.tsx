import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


interface YourDataType {
    imageUrl: string;
    name: string;
    para: string;
    price: number;
    category:string;
  }

export default function Index({ data }: { data: YourDataType }) {
  return (
    <div>
      <Box >
       
        <Card  sx={{maxWidth: 345,backgroundColor:"#09273c",boxShadow:"0 0 12px rgba(0,0,0,.9)"}}>
        <Link href={`/services/${data?.category}/${data.name}`}>
        <CardMedia
        sx={{ height: 140 }}
        image={data.imageUrl}
        title="green iguana"
      />
     
     </Link>  
      <CardContent >
        <Typography gutterBottom variant="h6" component="div" sx={{color:'#fff',textTransform:"capitalize"}}>
        {data.name}
        </Typography>
        <Typography variant="body2"   sx={{color:'#fff',  fontSize:"14px",lineHeight:"24px"}}>
        {data.para}
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
      </Box>
    </div>
  );
}
