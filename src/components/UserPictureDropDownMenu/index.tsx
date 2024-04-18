import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserPictureDropDownMenuCSS from "./UserPictureDropDownMenu.module.css";
import Link from 'next/link';

export default function ToggleMenu(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{
        display: "flex",
        flex: 1,
        width: "fit-content"}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
            display: "flex",
            width: "0"}}
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
        <MenuItem onClick={handleClose}><Link href={"/login"} key={"logoff"}>Logoff</Link></MenuItem>
      </Menu>
    </div>
  );
}
