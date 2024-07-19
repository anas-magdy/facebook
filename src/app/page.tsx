import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Posts from "@/components/posts";
import MultipleItems from "@/components/carousel";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          md={3.5}
          sx={{ display: { xs: "none", md: "grid" } }}
          bgcolor={"#18191a"}
          color={"black"}
          style={{ overflowY: "scroll", height: "100vh" }}
        >
          <p>anas</p>
          <p>anas</p>
          <p>anas</p>
          <p>anas</p>
          <p>anas</p>
          <p>anas</p>
          <p>anas</p>
          <p>anas</p>
        </Grid>
        <Grid
          justifyContent={"center"}
          md={5}
          sx={{ display: { xs: "grid" } }}
          bgcolor={"#18191a"}
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            height: "100vh",
            paddingLeft: "20px",
            paddingTop: "70px",
          }}
        >
           <Posts></Posts>
          <MultipleItems></MultipleItems>
         
        </Grid>
        <Grid
          item
          md={3.5}
          bgcolor={"#18191a"}
          sx={{ display: { xs: "none", md: "grid" } }}
          style={{ overflowY: "scroll", height: "100vh" }}
        >
          <p>magdy</p>
        </Grid>
      </Grid>
    </Box>
  );
}
