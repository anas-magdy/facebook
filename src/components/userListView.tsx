
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from "@mui/material/Grid2";
import Image from 'next/image';
<<<<<<< HEAD
import ProfileImage from './profileImage';
import TextDirectionHandeler from './textDirectionHandeler';

const UserListView = () => {
    return (
        <Grid container  marginBottom={"2px"} padding={"5px"} borderRadius={"15px"} className={"mainIcon"}>
            <Grid  size={2}>
                 <ProfileImage></ProfileImage>  
            </Grid>
            <Grid size={9}>
                <TextDirectionHandeler text={"Anas Magdy "}></TextDirectionHandeler>
            </Grid>
        </Grid>
    )
}
=======

const UserListView = () => {
    return (
        <Grid container spacing={2} margin={"2px"} padding={"5px"} borderRadius={"15px"} className={"mainIcon"}>
            <Grid  size={2}>
                <Image
                    alt="User Profile Pic"
                    width={"100"}
                    height={"100"}
                    className="rounded-full object-cover h-10 w-10"
                    src={"/user-avatar-placeholder.jpg"}
                />
            </Grid>

            <Grid size={9}>user Name</Grid>
            <Grid size={1}>
                <CancelIcon></CancelIcon>
            </Grid>
        </Grid>


    )
}

>>>>>>> 6cba6d863efc9dd94ff8aa69554708e3a5cf0263
export default UserListView
