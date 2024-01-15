import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function Index() {
  return (
    <div style={{ backgroundColor: "#031d2e", paddingTop: "80px" }}>
      <Box>
        <Typography
          variant="h5"
          sx={{ color: "#fff", fontSize: "36px", textAlign: "center" }}
        >
          Most Popular Events
        </Typography>
        <Box sx={{ borderTop: "3px solid #ff7010", width: "10%",margin:"auto",marginTop:"20px",marginBottom:"20px"}}>
     
            </Box>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: "16px",
            textAlign: "center",
            boder: "2px solid #fff",
          }}
        >
          Check out the most in-demand events for your easy reference to book
          our services today!
        </Typography>
      </Box>
    </div>
  );
}
