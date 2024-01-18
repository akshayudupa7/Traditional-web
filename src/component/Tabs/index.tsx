import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography } from "@mui/material";

interface YourDataType {
  description: string;
  help: string;
  // Add other properties based on the actual structure
}

export default function LabTabs({ data }: { data: YourDataType }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", marginTop: "50px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              indicator: {
                color: "orange",
              },
            }}
          >
            <Tab
              label="Description"
              value="1"
              sx={{
                color: value === "1" ? "#ff7010" : "#fff",
                "&.Mui-selected": {
                  color: "#ff7010",
                },
              }}
            />
            <Tab
              label="How do we help?"
              value="2"
              sx={{
                color: value === "2" ? "#ff7010" : "#fff",
                "&.Mui-selected": {
                  color: "#ff7010",
                },
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Typography
            variant="h6"
            sx={{ color: "#ff7010", marginBottom: "20px" }}
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", fontSize: "14px", lineHeight: "24px" }}
          >
            {data.description}
          </Typography>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h6"
            sx={{ color: "#ff7010", marginBottom: "20px" }}
          >
            How Do We Help?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", fontSize: "14px", lineHeight: "24px" }}
          >
            {data.help}
          </Typography>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
