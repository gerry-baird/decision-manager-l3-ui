import React, { useState } from "react";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { usePricingContext } from "./Context";

const DEFAULT_AGE = 25;

const PricingForm = () => {
  const [age, setAge] = useState(DEFAULT_AGE);
  const [priorIncidents, setPriorIncidents] = useState(false);

  const { getPricingResult, reset, price } = usePricingContext();

  const handleSwitchChange = (event) => {
    setPriorIncidents(event.target.checked);
  };

  return (
    <Box flex={9} p={2}>
      <Box position="sticky">
        <Card sx={{ ml: 5, p: 5 }}>
          <Typography variant="h6" gutterBottom>
            Pricing Details
          </Typography>
          <TextField
            label="Age"
            variant="outlined"
            defaultValue={DEFAULT_AGE}
            fullWidth
            sx={{ mt: 1, mb: 1 }}
            onChange={(e) => setAge(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={handleSwitchChange} />}
              label="Prior incidents"
            />
          </FormGroup>
          <Divider />
          <Button
            variant="contained"
            onClick={() => getPricingResult(age, priorIncidents)}
            endIcon={<SendIcon />}
            sx={{ mt: 5, mb: 5 }}
          >
            Get Price
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={reset}
            endIcon={<RestartAltIcon />}
            sx={{ ml: 5, mt: 5, mb: 5 }}
          >
            Reset
          </Button>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Result
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Price : {price}
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default PricingForm;