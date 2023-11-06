import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SxProps } from "@mui/material";

type PageLink = {
  id: string;
  label: string;
  children?: PageLink[];
  href?: string;
};

const links: PageLink[] = [
  {
    id: "ourSolutions",
    label: "Our Solutions",
    children: [
      {
        id: "financialPlanning",
        label: "Financial Planning",
        href: "/our-solutions/financial-planning",
      },
      {
        id: "retirementPlanning",
        label: "Retirement Planning",
        href: "/our-solutions/retirement-planning",
      },
      {
        id: "investmentPlanning",
        label: "Investment Planning",
        href: "/our-solutions/investment-planning",
      },
    ],
  },
  {
    id: "invest",
    label: "Invest",
    children: [
      {
        id: "ipo",
        label: "IPO",
        href: "/invest/ipo",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "/pricing",
  },
  {
    id: "knowledgeBase",
    label: "Knowledge Base",
    children: [
      {
        id: "blogs",
        label: "Blogs",
        href: "/knowledgeBase/blogs",
      },
    ],
  },
];

const appBarHeightStyles: SxProps = {
  px: 4,
  py: 2,
};

const navLinkButtonStyles: SxProps = {
  color: "#000",
  textTransform: "capitalize",
  fontSize: {
    md: "1rem",
  },
  fontWeight: 600,
  "&:hover": {
    color: "primary.main",
  },
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [currentNavLink, setCurrentNavLink] = useState<string | null>(null);

  const handleOpenNavMenu = (
    id: string,
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (id !== currentNavLink) {
      console.log("Open is triggered");
      setAnchorElNav(event.currentTarget);
      setCurrentNavLink(id);
    }
  };

  const handleCloseNavMenu = () => {
    console.log("Close is triggered");
    setCurrentNavLink(null);
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{ ...appBarHeightStyles }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              StepOne
            </Typography> */}
            <Box
              component="img"
              src="/images/footer/Logo.png"
              sx={{ width: "150px" }}
            />

            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              StepOne
            </Typography> */}

            {/* NAVLINKS SECTION - START */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  // xs: "none",
                  md: "flex",
                },
                justifyContent: {
                  // xs: "none",
                  md: "flex-end",
                },
                gap: "2rem",
              }}
            >
              {links.map((link) => (
                <React.Fragment key={link.id}>
                  <Button
                    // onMouseEnter={(e) => handleOpenNavMenu(link.id, e)}
                    onClick={(e) => handleOpenNavMenu(link.id, e)}
                    endIcon={link.children ? <KeyboardArrowDownIcon /> : null}
                    sx={{
                      ...navLinkButtonStyles,
                    }}
                    // onMouseLeave={handleCloseNavMenu}
                  >
                    {link.label}
                  </Button>
                  {currentNavLink === link.id && (
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElNav}
                      open
                      onClose={handleCloseNavMenu}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {link.children?.map((childLink) => (
                        <MenuItem
                          key={childLink.id}
                          onClick={handleCloseNavMenu}
                        >
                          {childLink.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </React.Fragment>
              ))}
            </Box>
            {/* NAVLINKS SECTION - END */}

            {/* CUSTOMER SUPPORT - START */}
            <Box
              sx={{
                display: {
                  // xs: "none",
                  md: "flex",
                },
                justifyContent: { xs: "none", md: "flex-start" },
                gap: "3rem",
                m: "0 2rem",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "1.5rem",
                }}
                src="/images/customer-support.png"
              ></Box>
              <Box
                component="img"
                sx={{
                  width: "1.5rem",
                }}
                src="/images/global-logo.png"
              ></Box>
            </Box>
            {/* CUSTOMER SUPPORT - END */}

            {/* LOGIN - START */}
            <Button
              sx={{
                ...navLinkButtonStyles,
              }}
            >
              Login
            </Button>
            {/* LOGIN - END */}

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ ...appBarHeightStyles }} />
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
