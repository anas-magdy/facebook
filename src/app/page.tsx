import Grid from '@mui/material/Grid2';
import Posts from "@/components/posts";
import MultipleItems from "@/components/carousel";
import UserListView from "@/components/userListView";
import HomeLeftSide from "@/components/homeLeftSide";
import Storys from "@/components/ui/Storys";
import FriendSuggestion from '@/components/ui/friendSuggestion';
export default function Home() {
  return (
    <>
  
      <Grid container display={"flex"} justifyContent={"space-between"}>
         <Grid size={3} sx={{ display: { xs: "none", lg: "grid" } }} bgcolor={"#18191a"} color={"black"} style={{ overflowY: "scroll", height: "92vh" }}>
             <HomeLeftSide></HomeLeftSide>
          </Grid>


        <Grid justifyContent={"center"} size={{xs:12, md:9,lg:6}}  bgcolor={"#18191a"}
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            height: "92vh",
            padding: "20px",
          }}
        >
          <Grid size={{xs:12, md:10}} justifySelf={"center"}>
            <Storys></Storys>
            <Posts></Posts>
            <FriendSuggestion></FriendSuggestion>
            <MultipleItems></MultipleItems>
          </Grid>

        </Grid>
        <Grid
          size={3}
          bgcolor={"#18191a"}
          sx={{ display: { xs: "none", md: "grid" } }}
          style={{ overflowY: "scroll", height: "92vh" }}
        >
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
          <UserListView></UserListView>
        </Grid>
      </Grid>
      </>
  );
}
