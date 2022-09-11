import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function GstInfo() {
  return (
    <Grid contianer my={3} sx={{ paddingLeft: "70px" }}>
      <Grid item xs={12}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Add Client
          </Typography>
          <Typography variant="body2" color="textSecondary" fontWeight="400">
            Enter GST number of the Client {<br />}
            You can add GST number which have GST type as {<br />}
            Regular or Composition.
          </Typography>
        </Box>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Here are your plan details
          </Typography>
          <Typography variant="body2" color="textSecondary" fontWeight="bold">
            Available GSTIN credits - 319 {<br />}
            Expiry Date - 22/03/2003
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default GstInfo;