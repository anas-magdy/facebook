
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from "@mui/system/Unstable_Grid/Grid";
import Image from 'next/image';

const UserListView = () => {
    return (
        <Grid container spacing={2} margin={"2px"} padding={"5px"} borderRadius={"15px"} className={"mainIcon"}>
            <Grid item xs={2}>
                <Image
                    alt="User Profile Pic"
                    width={"100"}
                    height={"100"}
                    className="rounded-full object-cover h-10 w-10"
                    src={"/user-avatar-placeholder.jpg"}
                />
            </Grid>

            <Grid item xs={9}>user Name</Grid>
            <Grid item xs={1}>
                <CancelIcon></CancelIcon>
            </Grid>
        </Grid>


    )
}

export default UserListView
