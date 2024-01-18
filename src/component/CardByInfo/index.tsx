import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
import Tabs from "@/component/Tabs";

interface YourDataType {
  imageUrl: string;
  name: string;
  para: string;
  price: number;
  description: string; // Add this property
  help: string; // Add this property
}

export default function Index({ data }: { data: YourDataType }) {
  return (
    <div>
      <Grid container gap={4}>
        <Grid item xs={12} md={3}>
          <Image
            src={data.imageUrl}
            width={100}
            height={100}
            alt="this is image"
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" sx={{ color: "#fff", fontSize: "36px" }}>
            {data.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: "14px",
              lineHeight: "26px",
              margin: "10px 0px",
            }}
          >
            {data.para}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", fontSize: "28px", margin: "10px 0px" }}
          >
            Starting From ${" "}
            <span style={{ color: "#ff7010" }}>{data.price}</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff", fontSize: "16px" }}>
            *Prices may vary based on the family's rituals. Please call us for
            more details.
          </Typography>
          <button
            style={{
              fontSize: "14px",
              backgroundColor: "#ff7010",
              height: "50px",
              padding: "0px 23px",
              color: "#fff",
              border: "none",
              marginTop: "20px",
            }}
          >
            BOOK NOW
          </button>
        </Grid>
      </Grid>
      <Tabs data={data} />
    </div>
  );
}
