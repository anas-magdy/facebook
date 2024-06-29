import Image from "next/image";
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Post from "@/components/post";
import { Reels } from "./reels";  
import EmblaCarousel from "@/components/embla-slider/emblaSlider";
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={3.5} sx={{display:{xs:"none",md:"grid"}}}  bgcolor={"#18191a"} color={"black"} style={{overflowY:"scroll", height:"100vh"}}>
          <p>anas</p>
          <p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p>
          <p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p>
          <p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p><p>anas</p>
        </Grid>
        <Grid justifyContent={"stretch"} md={5} sx={{display:{xs:"grid"}}} bgcolor={"#18191a"} style={{overflowY:"scroll", height:"100vh",paddingLeft:"20px" }} >
          
          <Post></Post>
          <Post></Post>
          <div className="my-20 z-10">
            <EmblaCarousel></EmblaCarousel>
            </div>
          <Post></Post>
        </Grid>
        <Grid item md={3.5} bgcolor={"#18191a"} sx={{display:{xs:"none",md:"grid"}}} style={{overflowY:"scroll", height:"100vh"}} >
          <p>magdy</p>
        </Grid>
      </Grid>
    </Box>
  );
}
