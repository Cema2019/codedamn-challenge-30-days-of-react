import { Typography, Stack, Link } from "@mui/material";

const HomePage = () => {
  return (
    <Stack
      sx={{
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to 30 Days of React Challenge
      </Typography>
      <Typography variant="h5" paragraph>
        This is a page where you can find all solutions to the{" "}
        <Link
          href="https://codedamn.com/challenge/30-days-of-react"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          CodeDamn
        </Link>{" "}
        challenges.
      </Typography>
      <Typography variant="h6">
        Built with TypeScript and styled with MUI.
      </Typography>
    </Stack>
  );
};

export default HomePage;
