import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Image from "next/image";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#031d2e",paddingTop:"40px"}}>
      <Box >
        <Typography variant="h5" sx={{color:"#fff",fontSize:"26px",textAlign:"center"}}>WHAT OUR CUSTOMERS SAY</Typography>
        <Box
          sx={{
            borderTop: "3px solid #ff7010",
            width: "20%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></Box>
      </Box>

      <Box sx={{marginTop:"80px"}}>
        <Grid container sx={{ width: "90%", margin: "auto" }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#17384e",
                width: "90%",
                paddingBottom: "20px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  top: "-40px",
                }}
              >
                <Image
                  src="https://www.harigurus.com/static/media/ramesh.8de87a37.jpeg"
                  width={100}
                  height={100}
                  alt="this is image"
                  style={{ borderRadius: "50%", margin: "auto" }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  lineHeight: "24px",
                  textAlign: "center",
                  margin: "20px 0px 30px 0px",
                  padding:"0px 20px"
                }}
              >
                We engaged prohits for my 11th day karma of my deceased mother
                on 16 th November 21, the function was well arranged in total,
                by two pandits with reasonable cost. I am satisfied 🙏
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  lineHeight: "24px",
                  textAlign: "center",
                  margin: "20px 0px 30px 0px",
                }}
              >
                Ramesh G.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#17384e",
                width: "90%",
                paddingBottom: "20px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  top: "-40px",
                }}
              >
                <Image
                  src="https://www.harigurus.com/static/media/shruti.8241951a.jpeg"
                  width={100}
                  height={100}
                  alt="this is image"
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  lineHeight: "24px",
                  textAlign: "center",
                  margin: "20px 0px 30px 0px",
                  padding:"0px 20px"
                }}
              >
                We liked your professionalism, you were on time with regard to
                the response. Thank you for arranging so nicely for us. The
                event turned out to be awesome than expected. Thank you veru
                much.
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  lineHeight: "24px",
                  textAlign: "center",
                  margin: "20px 0px 30px 0px",
                }}
              >
                Shruthi Hebbar
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#17384e",
                width: "90%",
                paddingBottom: "20px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  top: "-40px",
                }}
              >
                <Image
                  src="https://anuragsinghbam.com/images/gautham.webp"
                  width={100}
                  height={100}
                  alt="this is image"
                  style={{ borderRadius: "50%" }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  lineHeight: "24px",
                  textAlign: "center",
                  margin: "20px 0px 30px 0px",
                  padding:"0px 20px"
                }}
              >
                We are very happy with the outcome of your services, you are
                very patient and I m convinced we can definitely leave our
                worries to you. I will recommend to my family and friends. Thank
                you!
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  lineHeight: "24px",
                  textAlign: "center",
                  margin: "20px 0px 30px 0px",
                }}
              >
                Gautham Chengappa
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
