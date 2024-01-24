import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FaHeadset } from "react-icons/fa6";
import Link from "next/link";
import Modals from "@/component/Modals"
import "./index.css";
const Header = () => {
  return (
    <div style={{ backgroundColor: "#07273c" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "90%", margin: "auto" }}
      >
        <Stack direction="row" justifyContent="space-between" sx={{ gap: 4 }}>
          <Box>
            <Image
              src="https://www.harigurus.com/static/media/newLogo.798283e0.png"
              width={300}
              height={80}
              alt="this is image"
            />
          </Box>
          <Box sx={{ display: "flex", marginTop: 4 }}>
            <FaHeadset style={{ color: "#fff", fontSize: "24px" }} />
            <Typography
              variant="body1"
              sx={{ color: "#ff7010", fontSize: "14px", marginLeft: 2 }}
            >
              Call Us: <span style={{ color: "#fff" }}>9353066802</span>
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ marginTop: 4, gap: 2 }}>
          <Link href="/home" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { borderTop: "2px solid #ff7010", color: "#ff7010" },
              }}
            >
              Home
            </Typography>
          </Link>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { borderTop: "2px solid #ff7010", color: "#ff7010" },
              }}
            >
              About
            </Typography>
          </Link>
          <Link href="/services" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { borderTop: "2px solid #ff7010", color: "#ff7010" },
              }}
            >
              Services
            </Typography>
          </Link>
          <Link href="/profiles" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { borderTop: "2px solid #ff7010", color: "#ff7010" },
              }}
            >
              Profile
            </Typography>
          </Link>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { borderTop: "2px solid #ff7010", color: "#ff7010" },
              }}
            >
              Contact
            </Typography>
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { borderTop: "2px solid #ff7010", color: "#ff7010" },
              }}
            >
           <Modals/>
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};
export default Header;
