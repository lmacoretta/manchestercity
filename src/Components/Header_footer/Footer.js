import React from 'react';
import { CityLogo } from '../utils/icons';


const Footer = (props) => {
   return (
      <footer className="bck_blue">
         <div className="footer_logo">
            <CityLogo
               link='/'
               linkTo={true}
               width='70px'
               height='70px'
            />
         </div>

         <div className="footer_discl">
            Manchester City 2018 &copy; All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;