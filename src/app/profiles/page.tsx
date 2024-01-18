import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
import Accord from "@/component/Accord";
export default function Page() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#031d2e",
          textAlign: "center",
          padding: "50px 0px",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "#fff" }}>
            Profiles
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#17384e", padding: "50px 0px" }}>
          <Accord />
        </Box>
      </Box>
    </div>
  );
}
