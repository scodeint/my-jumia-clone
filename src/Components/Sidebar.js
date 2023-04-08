import React from 'react';
import "../Style/Sidebar.css";
import { Link } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import GamesIcon from '@mui/icons-material/Games';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="categories">
        <Link to="/supermarket">
          <div className="category_items">
            <LocalGroceryStoreIcon />
            <span>Supermarket</span>
          </div>
        </Link>
        <Link to="/healthbeauty">
          <div className="category_items">
            <MedicationLiquidIcon />
            <span>Health & Beauty</span>
          </div>
        </Link>
        <Link to="/homeoffice">
          <div className="category_items">
            <HomeIcon />
            <span>Home & Office</span>
          </div>
        </Link>
        <Link to="/phoneTablets">
          <div className="category_items">
            <PhoneAndroidIcon />
            <span>Phone & Tablets</span>
          </div>
        </Link>
        <Link to="/computing">
          <div className="category_items">
            <ComputerIcon />
            <span>Computing </span>
          </div>
        </Link>
        <Link to="/electronics">
          <div className="category_items">
            <LiveTvIcon />
            <span>Electronics</span>
          </div>
        </Link>
        <Link to="/fashion">
          <div className="category_items">
            <CheckroomIcon />
            <span>Fashion</span>
          </div>
        </Link>
        <Link to="/babyproduct">
          <div className="category_items">
            <ChildFriendlyIcon />
            <span>Baby Products</span>
          </div>
        </Link>
        <Link to="/gaming">
          <div className="category_items">
            <GamesIcon />
            <span>Gaming </span>
          </div>
        </Link>
        <Link to="/sporting">
          <div className="category_items">
            <SportsRugbyIcon />
            <span>Sporting Goods</span>
          </div>
        </Link>
        <Link to="/automobile">
          <div className="category_items">
            <AirportShuttleIcon />
            <span>Automobile</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="category_items">
            <MoreHorizIcon />
            <span>Other categories</span>
          </div>
        </Link>
      </div>

     
      <div className="showcase">
        <span className="home_image" />
      </div>

      <div className="right_section off">
        <div className="right_section_content ">
          <div className="right_section_content_items">
          <div className="right_section_ads">
              <img src="https://ng.jumia.is/cms/0-1-cpr/2022/june-14/free-delivery_218x184.png" alt="Help center" />  
          </div>
          </div>
         
          <div className="right_section_content_items">
            <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2023/JForce.png" alt="Sell" /> 
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Sidebar
