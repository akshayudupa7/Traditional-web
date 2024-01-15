import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
const Main = () => {
  return (
    <div style={{ backgroundColor: "#031d2e" }}>
      <Grid container sx={{ paddingTop: "50px" }}>
        <Grid item md={6} sm={12}>
          <Box sx={{ width: "90%", margin: "auto" }}>
            <Typography
              variant="h6"
              sx={{ color: "#ff7010", fontSize: "18px", marginTop: "10px" }}
            >
              What is your Event?
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontSize: "30px",
                lineHeight: "40px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Book your Cook Today
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: "18px", marginBottom: "30px" }}
            >
              No event is complete without food offerings to the divine, and
              prasadam to the guests.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: "18px", marginBottom: "30px" }}
            >
              Get healthy, hygienic, and scrumptious traditional meals prepared
              at your place or catered to your doorstep.
            </Typography>
            <button
              style={{
                fontSize: "14px",
                backgroundColor: "#ff7010",
                color: "#fff",
                height: "50px",
                width: "40%",
             
              }}
            >
              BOOK APPOINTMENT
            </button>
          </Box>
        </Grid>
        <Grid item md={6} sm={12}>
          <Box sx={{ width: "40%" }}>
            <Image
              src="https://www.harigurus.com/static/media/Food.40956de7.jpeg"
              width={100}
              height={50}
              alt="this is image"
              layout="responsive"
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
