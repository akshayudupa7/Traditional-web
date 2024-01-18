"use client";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Form from "@/component/Form";
import { FeedbackForm } from "@/utils";
import { addFeedback } from "@/service/feedback";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  question: string;
  [key: string]: string; // Index signature allowing any string key
}

export default function Page() {
  const initial = {
    name: "",
    mobile: "",
    email: "",
    question: "",
  };


  const [val, setVal] = useState([]);
  const [form, setForm] = useState<FormData>(initial);
  const onSubmit = async() => {
    const data=await addFeedback(form)
  };
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ backgroundColor: "#031d2e", width: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "26px",
            color: "#fff",
            textAlign: "center",
            paddingTop: "40px",
            paddingBottom:"70px"
          }}
        >
          Contact
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#17384e", width: "100%" }}>
        <Grid container sx={{ width: "90%", margin: "auto" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontSize: "26px", color: "#fff", paddingTop: "40px" }}
            >
              Contact Information
            </Typography>

            <Stack direction="row" gap={4}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#ff7010", fontSize: "20px" }}
                >
                  Call Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontSize: "14px" }}
                >
                  9353066802
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontSize: "14px" }}
                >
                  8079687199
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#ff7010", fontSize: "20px" }}
                >
                  Mail Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontSize: "14px" }}
                >
                  harigurus2021@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "red",
                padding: "30px 0px",
                position: "relative",
                top: "60px",
          
                width:'100%'
              }}
            >
              <Typography variant="h6" sx={{ color: "#fff", fontSize: "22px",textAlign:"center"}}>
                Have A Question / Feedback?
              </Typography>
              <Box
                sx={{
                  marginTop: "30px",
                  margin:"auto",
                  width:"70%"
                }}
              >
                {FeedbackForm.map((item) => (
                  <Form
                    label={item.label}
                    type={item.type}
                    value={form[item.id]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm({ ...form, [item.id]: e.target.value })
                    }
                  />
                ))}
              </Box>
             <Box sx={{width:'100%'}}>
                <Box sx={{width:"70%",margin:'auto'}}>
                <button
                style={{
                  backgroundColor: "orange",
                  color: "#fff",
                  border: "none",
                  width: "100%",
                  height: "40px",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
                onClick={onSubmit}
              >
                Save
              </button>
                </Box>
         

             </Box>
         
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.2478507471533!2d77.565444!3d12.891778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155931825eb7%3A0xd3b7f9f5d50cda6a!2sCentury%20Central!5e0!3m2!1sen!2sin!4v1705475436722!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </div>
  );
}
