import { useState } from 'react';

import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';

//import { AccountContext } from '../../../context/AccountProvider';
//import { UserContext } from '../../../context/UserProvider';

//components
import InfoDrawer from '../../drawer/Drawer';

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);

   // const { setAccount, setShowloginButton } = useContext(AccountContext);
    //const { setPerson } = useContext(UserContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = () => {
        setOpenDrawer(true);
    };

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose(); toggleDrawer(); }}>
                    Profile
                </MenuOption>
                {/* Add logout button here later when implementing */}
            </Menu>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    );
};

export default HeaderMenu;
