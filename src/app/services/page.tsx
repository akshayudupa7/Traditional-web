"use client";
import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
import { getService } from "@/service/services";
import Cards from "@/component/Cards";

interface Value {
  name: string;
  imageUrl: string;
  description: string;
  para: string;
  price: number;
  help: string;
  icon: string;
  category: string;
}
export default function Page() {
  const [val, setVal] = useState<Value[]>([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getService();
    setVal(data.message);
  };

  return (
    <div>
      <Box sx={{ backgroundColor: "#031d2e", width: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "26px",
            color: "#fff",
            textAlign: "center",
            paddingTop: "40px",
            paddingBottom: "70px",
          }}
        >
          Services
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(https://www.harigurus.com/static/media/services-bg2.b80343b3.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          padding: "100px 0px",
        }}
      >
        <Grid container>
          {val &&
            val?.map((item) => (
              <Grid item xs={12} md={3}>
                <Box sx={{ width: "90%" }}>
                  <Cards data={item} />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
