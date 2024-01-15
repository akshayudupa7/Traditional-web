import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Main = () => {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#031d2e", paddingTop: "40px" }}
    >
      <Grid container sx={{ width: "90%", margin: "auto" }}>
        <Grid item xs={12} md={4}>
          <Box>
            <Image
              src="https://www.harigurus.com/static/media/newLogo.798283e0.png"
              width={300}
              height={80}
              alt="this is image"
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: "16px", lineHeight: "26px" }}
            >
              Following your customs and traditions is not difficult anymore.
              HariGurus is a one-stop-shop for all Hindu religious, customs and
              traditional requirements.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontSize: "18px",
                lineHeight: "26px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Follow Us
            </Typography>
            <Stack direction="row">
              <FaFacebook style={{ color: "#fff", fontSize: "20px" }} />
              <FaInstagram style={{ color: "#fff", fontSize: "20px" }} />
              <FaYoutube style={{ color: "#fff", fontSize: "20px" }} />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ paddingLeft: "20px" }}>
          <Typography
            sx={{ color: "#fff", fontSize: "22px", marginBottom: "26px" }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              borderTop: "3px solid #ff7010",
              width: "20%",

              marginTop: "10px",
              marginBottom: "20px",
            }}
          ></Box>
          <Link href="" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                marginBottom: "20px",
                "&:hover": { color: "#ff7010" },
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                marginBottom: "20px",
                "&:hover": { color: "#ff7010" },
              }}
            >
              About Us
            </Typography>
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                marginBottom: "20px",
                "&:hover": { color: "#ff7010" },
              }}
            >
              Services
            </Typography>
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                marginBottom: "20px",
                "&:hover": { color: "#ff7010" },
              }}
            >
              Profiles
            </Typography>
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                marginBottom: "20px",
                "&:hover": { color: "#ff7010" },
              }}
            >
              Contact
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            sx={{ color: "#fff", fontSize: "22px", marginBottom: "20px" }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              borderTop: "3px solid #ff7010",
              width: "20%",

              marginTop: "10px",
              marginBottom: "20px",
            }}
          ></Box>
          <Stack direction="row" gap={2}>
            <Image
              src="https://www.harigurus.com/assets/images/svg/map.svg"
              width={15}
              height={15}
              alt="this is image"
            />
            <Typography
              sx={{ color: "#fff", fontSize: "16px", marginBottom: "20px" }}
            >
              Block A A-804, Century Central, Kanakapura Rd, Mango Garden
              Layout, Bikasipura, Bengaluru, 560078
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <Image
              src="https://www.harigurus.com/assets/images/svg/address.svg"
              width={15}
              height={15}
              alt="this is image"
            />
            <Link href="" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  marginBottom: "20px",
                  "&:hover": { color: "#ff7010" },
                }}
              >
                harigurus2021@gmail.com
              </Typography>
            </Link>
          </Stack>
          <Stack direction="row" gap={2}>
            <Image
              src="https://www.harigurus.com/assets/images/svg/call.svg"
              width={15}
              height={15}
              alt="this is image"
            />
            <Link href="" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  marginBottom: "20px",
                  "&:hover": { color: "#ff7010" },
                }}
              >
                +91 9353066802
              </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
