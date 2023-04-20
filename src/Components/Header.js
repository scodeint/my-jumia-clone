import React, {useState} from 'react';
import '../Style/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsIcon from '@mui/icons-material/Sms';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";



function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const openMenu = Boolean(anchorEl);
  const openMenu2 = Boolean(anchorEl2);

  const handleClick = (e) =>{
    setAnchorEl(e.currentTarget);
  }

  const handleClickHelp = (e) =>{
    setAnchorEl2(e.currentTarget);
  }

  const handleClose = () =>{
    setAnchorEl(null);
  }

  const handleCloseHelp = () =>{
    setAnchorEl2(null);
  }
  return (
    <div className='header'>
        <Link to="/">
          < img className = "header__logo"  src='/images/sendme.png' alt='' />
        </Link>

        <div className='header__search'>
            <input 
            placeholder="Search products, brands and categories"
            className='header__searchInput' type="text" />
            <SearchIcon className="header__searchIcon" />
        </div>
        

        <div className='header__nav'>
            <Link to=""> 
            <div className='header__option'>
                <span className='header__optionLineOne'>
                  <PersonIcon />
                </span>
                <span className='header__optionLineTwo header__basketCount'> Account </span>
                <span className='header__optionLineOne'>
                  <ArrowDropDownIcon 
                  aria-controls='basic-menu'
                  aria-haspopup ="true" 
                  aria-expanded = {openMenu ? "true" : undefined}
                  onClick= {handleClick}/>
                </span>
                <span>
                  {/* Dropdown Items */}
                  <Menu className='drop__card__signin'  id='basic-menu' anchorEl={anchorEl} open={openMenu} onClose={handleClose} >
                    <MenuItem> <span className='dropIcon__button'>SIGN IN</span></MenuItem>
                    <MenuItem> <PersonIcon className='dropIcon__padding'/> My Account</MenuItem>
                    <MenuItem> <BorderStyleIcon className='dropIcon__padding' /> Orders</MenuItem>
                    <MenuItem> <FavoriteBorderIcon className='dropIcon__padding' /> Save Items</MenuItem>
                  </Menu>
                </span>
            </div>
            </Link>
            <div className='header__option'>
            <span className='header__optionLineOne'>
                    <HelpOutlineIcon />
                </span>
                <span className='header__optionLineTwo header__basketCount'>
                    Help
                </span>
                <span className='header__optionLineOne'>
                  <ArrowDropDownIcon 
                   aria-controls='help-menu'
                   aria-haspopup ="true" 
                   aria-expanded = {openMenu2 ? "true" : undefined}
                   onClick= {handleClickHelp}/>
                </span>
                <span>
                  {/* Dropdown Items */}
                  <Menu className='drop__card'  id='help-menu' anchorEl={anchorEl2} open={openMenu2} onClose={handleCloseHelp} >
                    <MenuItem>  Help Center </MenuItem>
                    <MenuItem>  Place & Track oder</MenuItem>
                    <MenuItem>  Order Cancellation</MenuItem>
                    <MenuItem>  Returns & Refund</MenuItem>
                    <MenuItem>  Payment & SendmeNaija Account</MenuItem>
                    <MenuItem>  <span className='dropIcon__button'> <SmsIcon className='live__chaticon'/> LIVE CHAT</span></MenuItem>
                  </Menu>
                </span>
            </div>
            

             <Link to="/checkout">
             <div className='header__optionBasket'>
             <span className='header__optionLineTwo 
                    header__basketCount text__cart'>
                     Cart</span>
                     <AddShoppingCartIcon className="cart_img"/> 
                </div>
             </Link>
        </div>
    </div>
  )
}

export default Header
