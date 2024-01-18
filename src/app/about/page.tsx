import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function Page() {
  return (
    <div style={{backgroundColor:"#031d2e"}}>
      <Box sx={{width:"90%",margin:"auto"}}>
        <Typography variant="h5" sx={{color:"#fff",padding:"40px 0px",fontSize:"26px",textAlign:"center"}}>About</Typography>

        <Box>
          <Grid container gap={8}>
            <Grid item md={5} xs={12}>
              <Image
                src="http://kamleshyadav.com/html/astrology/version-2/assets/images/about2.jpg"
                width={30}
                height={30}
                alt="this is image"
                layout="responsive"
              />
            </Grid>
            <Grid item md={5} xs={12}>
              <Typography variant="h5" sx={{color:"#fff",fontSize:"26px"}}>Know More About Us</Typography>
              <Box
                sx={{
                  borderTop: "3px solid #ff7010",
                  width: "50%",

                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              ></Box>
              <Box>
                <Typography variant="body1" sx={{color:"#fff",fontSize:"16px",marginBottom:"32px",lineHeight:"26px"}}>
                  On HariGurus, we are striving to keep the rich culture and
                  traditions of our land alive by making it easier for everyone
                  to observe important rituals amid their busy, fast paced
                  lifestyle. While everyone wishes to remain connected to their
                  spiritual side and stay blessed throughout. However, the lack
                  of time, knowledge about the rituals and their significance,
                  limited access to learned purohits who can conduct these
                  rituals or offer spiritual guidance and availability of other
                  services to conduct a successful ceremony prevents them from
                  following their desire to stay connected to the roots.
                </Typography>
                <Typography  variant="body1" sx={{color:"#fff",fontSize:"16px",marginBottom:"32px",lineHeight:"26px"}}>
                  We understand the challenges faced by many households when it
                  comes to managing the religious, spiritual, and traditional
                  requirements. That’s why we have built HariGurus as a solution
                  to address accessibility of quality services that will enable
                  everyone to observe age-old traditional practices.
                </Typography>
                <Typography  variant="body1" sx={{color:"#fff",fontSize:"16px",lineHeight:"26px"}}>
                  We have brought together the knowledgeable purohits with deep
                  understanding of the vedas and samskaras, quality catering and
                  cooking services, experienced astrologers and other providers
                  of the objects and articles critical to performing sacred
                  rituals to one place so our users don’t have to go looking.
                </Typography>
              </Box>
              <Stack direction="row">
                    <Box>

                    </Box>
                    <Box sx={{backgroundColor:"#17384e",padding:"25px",width:"100%",marginTop:"30px",borderRadius:"10px"}}>
                        <Typography variant="h6" sx={{color:"#fff"}}>Contact Us</Typography>
                        <Typography sx={{color:"#ff7010",fontSize:"32px"}}>+91 9353066802</Typography>
                    </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
