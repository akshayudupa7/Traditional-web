"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useState } from "react";
import { Box } from "@mui/material";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Grid from "@mui/material/Grid";
import { Astrologer, Cook, Purohith } from "@/utils";
import Image from "next/image";

export default function Accord_B() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Accordion
        sx={{ color: "#fff", width: "100%" ,backgroundColor:"#17384e",margin:"0px",padding:"20px 0px"}}
      >
        <Box sx={{ display: "flex"}}>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleExpandClick}
            className="Nav_Data"
            sx={{ "&.Mui-expanded": { minHeight: 50, maxHeight: 50 ,margin:"0px",padding:"0px 0px"} }}
          >
            {expanded == true ? (
              <AiOutlineUp style={{ minHeight: "0px" }} />
            ) : (
              <AiOutlineDown style={{ minHeight: 0 }} />
            )}
          </AccordionSummary>
      
            <Link href="#" className="Nav_Data" style={{textDecoration:"none"}}>
            <Typography sx={{ lineHeight: "3rem",color:"#fff",fontSize:"26px"}}>
              Purohiths
              </Typography>
            </Link>
        
        
        </Box>
        <AccordionDetails>
           <Grid container>
            {
                Purohith.map((items)=>(
                    <Grid item xs={6} md={3}>
                        <Image src={items.images} width={100} height={100} alt="this is image"/>
                        <Typography>{items.name}</Typography>
                        <Typography>{items.place}</Typography>
                    </Grid> 
                ))
            }

           </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ color: "#fff", width: "100%" ,backgroundColor:"#17384e",margin:"0px",padding:"20px 0px"}}
      >
        <Box sx={{ display: "flex"}}>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleExpandClick}
            className="Nav_Data"
            sx={{ "&.Mui-expanded": { minHeight: 50, maxHeight: 50,margin:"0px",padding:"0px 0px" } }}
          >
            {expanded == true ? (
              <AiOutlineUp style={{ minHeight: "0px" }} />
            ) : (
              <AiOutlineDown style={{ minHeight: 0 }} />
            )}
          </AccordionSummary>
      
            <Link href="#" className="Nav_Data" style={{textDecoration:"none"}}>
            <Typography sx={{ lineHeight: "3rem",color:"#fff",fontSize:"26px"}}>
             Cooks
              </Typography>
            </Link>
        
        
        </Box>
        <AccordionDetails>
           <Grid container>
            {
                Cook.map((items)=>(
                    <Grid item xs={6} md={3}>
                        <Image src={items.images} width={100} height={100} alt="this is image"/>
                        <Typography>{items.name}</Typography>
                        <Typography>{items.place}</Typography>
                    </Grid> 
                ))
            }

           </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ color: "#fff", width: "100%" ,backgroundColor:"#17384e",padding:"20px 0px"}}
      >
        <Box sx={{ display: "flex"}}>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleExpandClick}
            className="Nav_Data"
            sx={{ "&.Mui-expanded": { minHeight: 50, maxHeight: 50 ,margin:"0px",padding:"0px 0px"} }}
          >
            {expanded == true ? (
              <AiOutlineUp style={{ minHeight: "0px" }} />
            ) : (
              <AiOutlineDown style={{ minHeight: 0 }} />
            )}
          </AccordionSummary>
      
            <Link href="#" className="Nav_Data" style={{textDecoration:"none"}}>
            <Typography sx={{ lineHeight: "3rem",color:"#fff",fontSize:"26px"}}>
           Astrologer
              </Typography>
            </Link>
        
        
        </Box>
        <AccordionDetails>
           <Grid container>
            {
               Astrologer.map((items)=>(
                    <Grid item xs={6} md={3}>
                        <Image src={items.images} width={100} height={100} alt="this is image"/>
                        <Typography>{items.name}</Typography>
                        <Typography>{items.place}</Typography>
                    </Grid> 
                ))
            }

           </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}