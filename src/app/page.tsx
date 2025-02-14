import Grid from '@mui/material/Grid2';
<<<<<<< HEAD
=======
import {Box} from '@mui/material';
>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263
import Posts from "@/components/posts";
import MultipleItems from "@/components/carousel";
import UserListView from "@/components/userListView";
import HomeLeftSide from "@/components/homeLeftSide";
import Storys from "@/components/ui/Storys";
import FriendSuggestion from '@/components/ui/friendSuggestion';
export default function Home() {
  return (
    <>
  
<<<<<<< HEAD
      <Grid container display={"flex"} justifyContent={"space-between"}>
=======
      <Grid container spacing={2} display={"flex"} justifyContent={"space-between"}>
>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263
         <Grid size={3} sx={{ display: { xs: "none", lg: "grid" } }} bgcolor={"#18191a"} color={"black"} style={{ overflowY: "scroll", height: "92vh" }}>
             <HomeLeftSide></HomeLeftSide>
          </Grid>


<<<<<<< HEAD
        <Grid justifyContent={"center"} size={{xs:12, md:9,lg:6}}  bgcolor={"#18191a"}
=======
        <Grid justifyContent={"center"} size={{xs:12, md:9,lg:5}} sx={{ display: { xs: "grid" } }} bgcolor={"#18191a"}
>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            height: "92vh",
            padding: "20px",
          }}
        >
<<<<<<< HEAD
          <Grid size={{xs:12, md:10}} justifySelf={"center"}>
            <Storys></Storys>
            <Posts></Posts>
            <FriendSuggestion></FriendSuggestion>
            <MultipleItems></MultipleItems>
          </Grid>

=======
          <Storys></Storys>
          <FriendSuggestion></FriendSuggestion>
          <Posts></Posts>
          <MultipleItems></MultipleItems>
>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263
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
