import React, { useState } from "react";

import { Box, Tabs, Tab } from "@mui/material";
import PricingConfig from "./PricingConfig";
import LoanConfig from "./LoanConfig";

const ConfigPanel = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Pricing" />
          <Tab label="Loans" />
        </Tabs>
        {selectedTab === 0 && <PricingConfig />}
        {selectedTab === 1 && <LoanConfig />}
      </Box>
    </Box>
  );
};

export default ConfigPanel;
