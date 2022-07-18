import * as React from 'react';
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
import logo from '../assets/logo.png'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const NavTab = () => {
  const { t } = useTranslation()

  const pages = ['Home', 'Bookings', 'Reviews', 'About', 'FAQ'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const langVal = i18next.language;
  const [lan, setLan] = React.useState(langVal);
  const lanChange = (event) => {
    setLan(event.target.value);
    i18next.changeLanguage(event.target.value);
  }


  return (
    <AppBar sx={{ bgcolor: "white" }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/Home">
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#198754",
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="logo" className='img-fluid' style={{width: 80}}/>
          </Typography>
          </Link>

          <Link to="/Home">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: "#198754",
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="logo" className='img-fluid' style={{width: 80}}/>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',  justifyContent: 'flex-end' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="success"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration: 'none', color: "#198754"}} to={`/${page}`}>{t(page)}</Link>
                  </Typography>
                </MenuItem>
              ))}
              <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
                <InputLabel id="language-select-label">language</InputLabel>
                <Select
                  labelId="language-select-label"
                  id="language-select"
                  value={lan}
                  label="language"
                  onChange={lanChange}
                >
                  <MenuItem value={'en'}>English</MenuItem>
                  <MenuItem value={'fr'}>French</MenuItem>
                </Select>
              </FormControl>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: 'none', color: "#198754"}} to={`/${page}`}>
                  {t(page)}
                </Link>
              </Button>
            ))}
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="language-select-label">language</InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={lan}
                label="language"
                onChange={lanChange}
              >
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'fr'}>French</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavTab;