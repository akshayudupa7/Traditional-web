import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
// Define an interface for the expected structure of the 'data' prop
interface DataProps {
  name: string;
  imageUrl: string; // Corrected to lowercase 'string'
  description: string;
  para: string;
  price: number;
  help: string;
  icon: string;
}

// Use the defined interface as the type for the 'data' prop
export default function Index({ data }: { data: DataProps }) {
  return (
    <div style={{ width: "100%", marginTop: "40px" }}>
      <Box
        sx={{
          backgroundColor: "#07273c",
          boxShadow: "0 0 6px rgba(0,0,0,.8)",
          borderRadius: "4px",
          width: "96%",
          height: "300px",
          padding: "40px 0px",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Image src={data.icon} width={100} height={60} alt="this is image" />
        </Box>

        <Typography
          sx={{ color: "#fff", textAlign: "center", fontSize: "18px" }}
        >
          {data.name}
        </Typography>

        <Box
          sx={{
            borderTop: "3px solid #ff7010",
            width: "20%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></Box>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "24px",
          }}
        >
          {data.para}
        </Typography>

        <Link href={`/services/${data.name}`} style={{ textAlign: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              marginTop: "20px",
              color: "#ff7010",
              "&:hover": { color: "#fff" },
            }}
          >
            Read More
          </Typography>
        </Link>
      </Box>
    </div>
  );
}
