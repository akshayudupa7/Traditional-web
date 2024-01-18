"use client";
import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
import { getEventByCategory } from "@/service/events";
import CardByList from "@/component/CardByList";
import { usePathname } from "next/navigation";

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

export default function Page({ params }: any) {
  const [val, setVal] = useState<Value[]>([]);
  useEffect(() => {
    getData();
  }, []);

  console.log(params, "l");
  const getData = async () => {
    const data = await getEventByCategory(params.detail);
    setVal(data.message);
  };
  console.log(val, "l");
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
            textTransform: "capitalize",
          }}
        >
          {params.detail}
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
                <Box sx={{ width: "90%", marginTop: "20px" }}>
                  <CardByList data={item} />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
