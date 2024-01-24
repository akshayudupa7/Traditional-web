"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { addUser } from "@/service/user";
import Link from "next/link";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#17384e",
  boxShadow: 24,

  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const [mod, setMod] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async () => {
    const data = await addUser(mod);
    console.log(data);
  };

  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        sx={{ color: "#ff7010", textTransform: "capitalize" }}
      >
        Sign up
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "30%", height: "90vh" }}>
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h6" sx={{ color: "#fff", fontSize: "24px" }}>
            Sign Up
          </Typography>
          <Link
              href=""
              style={{
                textDecoration: "none",
                color: "#fff",
                marginTop: "10px",
              }}
              onClick={() => setOpen(false)}
            >
              X
            </Link>

          </Box>
       
          <Box sx={{ width: "100%", marginTop: "30px" }}>
            <input
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
              }}
              type="text"
              placeholder="name"
              value={mod.name}
              onChange={(e) =>
                setMod((prevMod) => ({ ...prevMod, name: e.target.value }))
              }
            />
          </Box>
          <Box sx={{ width: "100%", marginTop: "20px" }}>
            <input
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
              }}
              type="text"
              placeholder="email"
              value={mod.email}
              onChange={(e) =>
                setMod((prevMod) => ({ ...prevMod, email: e.target.value }))
              }
            />
          </Box>
          <Box sx={{ width: "100%", marginTop: "20px" }}>
            <input
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
              }}
              type="password"
              placeholder="password"
              value={mod.password}
              onChange={(e) =>
                setMod((prevMod) => ({ ...prevMod, password: e.target.value }))
              }
            />
          </Box>
          <Box sx={{ marginTop: "50px", width: "100%" }}>
            <Box sx={{ width: "40%", margin: "auto" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#ff7010",
                  color: "#fff",
                  fontSize: "16px",

                  height: "40px",
                  border: "none",
                  outline: "none",
                }}
                onClick={() => onSubmit()}
              >
                Sign Up
              </button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [nest, setNest] = useState({
    email: "",
    password: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async () => {
    console.log(nest);
    try {
      const data = await signIn("credentials", {
        email: nest.email,
        password: nest.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{ color: "#fff", textTransform: "capitalize" }}
      >
        Sign in{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "30%", height: "90vh" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ color: "#fff", fontSize: "24px" }}>
              Login
            </Typography>

            <Link
              href=""
              style={{
                textDecoration: "none",
                color: "#fff",
                marginTop: "10px",
              }}
              onClick={() => setOpen(false)}
            >
              X
            </Link>
          </Box>

          <Box sx={{ width: "100%", marginTop: "30px" }}>
            <input
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
              }}
              type="text"
              placeholder="email"
              value={nest.email}
              onChange={(e) =>
                setNest((prevMod) => ({ ...prevMod, email: e.target.value }))
              }
            />
          </Box>
          <Box sx={{ width: "100%", marginTop: "30px" }}>
            <input
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                border: "none",
                outline: "none",
              }}
              type="password"
              placeholder="password"
              value={nest.password}
              onChange={(e) =>
                setNest((prevMod) => ({ ...prevMod, password: e.target.value }))
              }
            />
          </Box>
          <Box sx={{ marginTop: "50px", width: "100%" }}>
            <Box sx={{ width: "40%", margin: "auto" }}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#ff7010",
                  color: "#fff",
                  fontSize: "16px",

                  height: "40px",
                  border: "none",
                  outline: "none",
                }}
                onClick={() => onSubmit()}
              >
                Login
              </button>
            </Box>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: "16px", textAlign: "center" }}
            >
              Create a account ?{" "}
              <span style={{ color: "#ff7010" }}>
                <ChildModal />
              </span>
            </Typography>
            <Box sx={{ width: "100%", margin: "auto" }}>
              <Box sx={{ width: "60%", margin: "auto" }}>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    color: "grey",
                    height: "50px",
                    border: "none",
                    outline: "none",
                    marginTop: "20px",
                  }}
                  onClick={() => signIn("google")}
                >
                  Sign in with google
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
