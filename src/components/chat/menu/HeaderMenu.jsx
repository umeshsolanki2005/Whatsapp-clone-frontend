import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Menu, MenuItem,styled} from "@mui/material";
import { useState } from "react";

const MenuOption=styled(MenuItem)`
    font-size: 14px;
    padding:15px 60px 5px 24px;
    color:#4A4A4A;


`

const HeaderMenu = ({setOpenDrawer}) => {

    const[open,setOpen]=useState(null);

    const handleClose = ()=>{
        setOpen(null);
    }

    const HandleClick =(e)=>{
        setOpen(e.currentTarget);
    }


  return (
    <>
      <MoreVertIcon onClick={HandleClick}/>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={()=>{handleClose();setOpenDrawer(true);}}>Profile</MenuOption>
      </Menu>
    </>
  );
};
export default HeaderMenu;
