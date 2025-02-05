import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";

export default function ReactCounterBug(): JSX.Element {
  const [number, setNumber] = useState<number>(0);

  return (
    <Card sx={{ p: 2, textAlign: "center", maxWidth: 300, margin: "auto" }}>
      <Typography variant="h4" data-testid="counter">
        {number}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        data-testid="incrementButton"
        onClick={() => setNumber((prev) => prev + 3)}
        sx={{ mt: 2 }}
      >
        Increment 3 times
      </Button>
    </Card>
  );
}
