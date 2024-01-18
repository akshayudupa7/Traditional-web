'use client'
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getEvent } from "@/service/events";
import Grid from "@mui/material/Grid";
import Boxes from "@/component/Boxes";

interface Event {
  name: string;
  imageUrl: string;
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
    <div style={{ backgroundColor: "#031d2e", paddingTop: "80px" }}>
      <Box>
        <Typography
          variant="h5"
          sx={{ color: "#fff", fontSize: "36px", textAlign: "center" }}
        >
          Most Popular Events
        </Typography>
        <Box
          sx={{
            borderTop: "3px solid #ff7010",
            width: "10%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></Box>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          Check out the most in-demand events for your easy reference to book
          our services today!
        </Typography>
        <Box>
          <Grid container spacing={3}> {/* Added spacing prop */}
            {val.map((item) => (
              <Grid item key={item.name} xs={12} md={3}>
                <Boxes data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
