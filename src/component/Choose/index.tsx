import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function Index() {
  return (
    <div style={{ backgroundColor: "#031d2e", paddingTop: "120px" }}>
      <Grid container gap={4} sx={{width:"90%",margin:"auto"}}>
        <Grid item xs={12} md={3}>
          <Typography sx={{ color: "#fff", fontSize: "26px" }}>
            WHY CHOOSE US
          </Typography>
          <Box
            sx={{
              borderTop: "3px solid #ff7010",
              width: "50%",
          
              marginTop: "20px",
              marginBottom: "20px",
            }}
          ></Box>
          <Typography sx={{color:"#fff"}}>
            Access our extensive network of scholarly purohits, experienced
            astrologers, qualified cooks and vendors to meet all your pooja
            related needs in one place
          </Typography>
        </Grid>
        <Grid item xs={6} md={8}>
          <Box sx={{ display: "flex", gap: "20%" }}>
            <Box sx={{ width: "100%" }}>
              <Box>
                <Image
                  src="https://www.harigurus.com/assets/images/svg/shape.svg"
                  width={200}
                  height={100}
                  layout="responsive"
                  alt="this is image"
                />
            
              </Box>

              <Typography sx={{color:"#fff",fontSize:"14px",textAlign:"center"}}>Qualified Purohits</Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Image
                src="https://www.harigurus.com/assets/images/svg/shape.svg"
                width={200}
                height={100}
                layout="responsive"
                alt="this is image"
              />
              <Typography sx={{color:"#fff",fontSize:"14px",textAlign:"center"}}>Qualified Cooks</Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Image
                src="https://www.harigurus.com/assets/images/svg/shape.svg"
                width={200}
                height={100}
                layout="responsive"
                alt="this is image"
              />
              <Typography sx={{color:"#fff",fontSize:"16px",textAlign:"center"}}>Qualified Astrologers</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
