import React, { FC, Fragment, useState } from 'react'
import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu'
import { HOME_ROUTE, SCORECARD_ROUTE } from '../../constants'
import { appBarStyles } from './AppBar.styles'

export interface MenuAppBarProps {
  handleClick: () => void
}

const MenuAppBar: FC<MenuAppBarProps> = ({ handleClick }) => {
  const history = useHistory()
  const userLogin = useSelector((state: any) => state.userLogin)
  const classes = appBarStyles()
  const [auth] = useState(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => history.push(HOME_ROUTE)}
            >
              Home
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => history.push(SCORECARD_ROUTE)}
            >
              Scorecard
            </IconButton>
          </div>
          {auth && (
            <Fragment>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img
                  className={classes.userImg}
                  src={userLogin?.userInfo?.photoURL}
                  alt="user profile"
                ></img>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClick}>Sign Out</MenuItem>
              </Menu>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
