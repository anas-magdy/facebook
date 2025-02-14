
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from "@mui/material/Grid2";
import Image from 'next/image';
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
export default UserListView
