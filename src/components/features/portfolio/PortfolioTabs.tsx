"use client";

import { useState } from "react";
import { Code, Award, Boxes } from "lucide-react";
import { Box, AppBar, Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import TabPanel from "./TabPanel";
import ProjectsTab from "./ProjectsTab";
import CertificatesTab from "./CertificatesTabs";
import TechStackTab from "./TechStackTab";

import { Project, Certificate, TechStackItem } from "@/types/portfolioTypes";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

interface PortfolioTabsProps {
  projects: Project[];
  certificates: Certificate[];
  techStacks: TechStackItem[];
}

export default function PortfolioTabs({
  projects,
  certificates,
  techStacks,
}: PortfolioTabsProps) {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "86%", mx: "auto" }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "transparent",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
            backdropFilter: "blur(10px)",
            zIndex: 0,
          },
        }}
        className="md:px-4"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          sx={{
            minHeight: "70px",
            "& .MuiTab-root": {
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: "600",
              color: "#94a3b8",
              textTransform: "none",
              padding: "20px 0",
              zIndex: 1,
              margin: "8px",
              borderRadius: "12px",
              "&:hover": {
                color: "#ffffff",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                transform: "translateY(-2px)",
              },
              "&.Mui-selected": {
                color: "#fff",
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
              },
            },
            "& .MuiTabs-indicator": {
              height: 0,
            },
            "& .MuiTabs-flexContainer": {
              gap: "8px",
            },
          }}
        >
          <Tab
            icon={<Code className="mb-2 w-5 h-5" />}
            label="Projects"
            {...a11yProps(0)}
          />
          <Tab
            icon={<Award className="mb-2 w-5 h-5" />}
            label="Certificates"
            {...a11yProps(1)}
          />
          <Tab
            icon={<Boxes className="mb-2 w-5 h-5" />}
            label="Tech Stack"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>

      {/* Render TabPanels secara kondisional */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        <ProjectsTab projects={projects} />
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        <CertificatesTab certificates={certificates} />
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
        <TechStackTab techStacks={techStacks} />
      </TabPanel>
    </Box>
  );
}
