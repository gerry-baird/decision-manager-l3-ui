import React, { useState } from "react";
import { Typography, Paper, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useAppContext } from "../../context/AppContext";

const LoanConfig = () => {
  const { loanURL, setLoanURL, getDefaultLoanURL } = useAppContext();

  const [localURL, setLocalURL] = useState(loanURL);
  const [backupURL, setBackupURL] = useState(loanURL);

  const handleCancel = (e) => {
    setLoanURL(backupURL);
    setLocalURL(backupURL);
  };

  const handleSubmit = (e) => {
    setLoanURL(localURL);
    setBackupURL(localURL);
  };

  const handleReset = (e) => {
    const defaultURL = getDefaultLoanURL();
    setLoanURL(defaultURL);
    setLocalURL(defaultURL);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Loan Config
      </Typography>
      <TextField
        label="Loan URL"
        variant="outlined"
        value={localURL}
        fullWidth
        sx={{ mt: 1, mb: 1 }}
        onChange={(e) => setLocalURL(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => handleSubmit()}
        endIcon={<SendIcon />}
        sx={{ mt: 5, mb: 5 }}
      >
        Update URL
      </Button>
      <Button
        variant="contained"
        onClick={() => handleCancel()}
        endIcon={<SendIcon />}
        sx={{ mt: 5, mb: 5, ml: 2 }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleReset()}
        endIcon={<RestartAltIcon />}
        sx={{ ml: 2, mt: 5, mb: 5 }}
      >
        Reset URL
      </Button>
    </Paper>
  );
};

export default LoanConfig;
