import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const pages = ['Home', 'About'];

function NavBar({title}) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
  setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="primary">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    GitHub Profile Finder
                    </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        <MenuItem key={null} onClick={handleCloseNavMenu}>
                            <Typography component={Link} to={'/'} textAlign="center">Home</Typography>
                            <Typography component={Link} to={'/about'} textAlign="center">About</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <GitHubIcon />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button component={Link} to={'/'} key={null} onClick={null} sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                    <Button component={Link} to={'/about'} key={null} onClick={null} sx={{ my: 2, color: 'white', display: 'block' }}>About</Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

NavBar.defaultProps = {
    title: 'GitHub Profile Finder',
}

NavBar.propTypes = {
    title: PropTypes.string,
}

export default NavBar