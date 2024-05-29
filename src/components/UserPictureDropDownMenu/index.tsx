import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserPictureDropDownMenuCSS from "./UserPictureDropDownMenu.module.css";
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import router from 'next/router';

export default function ToggleMenu(props: any) {
  const {logout} = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logoff() {
    logout();
    router.push("/login");
  }
  return (
    <div style={{
      display: "flex",
      flex: 1,
      width: "fit-content"
    }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
          display: "flex",
          width: "0"
        }}
      >
        {props.children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link href={"/profile"} key={"profile"}>Perfil</Link></MenuItem>
        <MenuItem onClick={handleClose}><button onClick={logoff} key={"logoff"}>Logoff</button></MenuItem>
      </Menu>
    </div>
  );
}
