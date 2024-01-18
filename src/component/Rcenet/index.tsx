'use client'
import React,{useEffect,useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getEvent } from "@/service/events";
import BoxesA from "@/component/BoxesA"


interface Event {
    name: string;
    imageUrl: string; // Corrected to lowercase 'string'
    description: string;
    para: string;
    price: number;
    help: string;
    icon: string;
  }
export default function Index() {

    useEffect(() => {
        getInfo();
      }, []);
    
      const [val, setVal] = useState<Event[]>([]); 
    
      const getInfo = async () => {
        try {
          const data = await getEvent();
          console.log(data);
          setVal(data.message);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };
  return (
    <div style={{ backgroundColor: "#031d2e"}}>
      <Box>
        <Typography variant="h5" sx={{ textAlign: "center",color:"#fff",fontSize:"26px",paddingTop:"30px",paddingBottom:"30px"}}>
          RECENT EVENTS
        </Typography>
        <Box
          sx={{
            borderTop: "4px solid #ff7010",
            width: "10%",
            textAlign: "center",
            margin: "auto",
       
          }}
        ></Box>
        <Typography variant="body1" sx={{ textAlign: "center",color:"#fff",fontSize:"16px",paddingTop:"30px"}}>
          HariGurus continues to be the preferred place for our users to find
          purohits and cooks who make their events a grand success. See our
          recent bookings.
        </Typography>


        <Box>
          <Grid container>
            {val.map((item) => {
              return (
                <Grid item xs={12} md={3}>
                  {" "}
                  {/* Add a unique key for each item */}
                  <BoxesA data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>

      </Box>
    </div>
  );
}
