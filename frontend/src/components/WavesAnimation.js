import React from 'react';
import './WavesAnimation.css';

function WavesAnimation() {
  return (
   <svg id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150" className='waves-svg'>
      
      {/* Animation created and modified from: https://svgwave.in/*/}

      <defs>
        <linearGradient id="gradient" x1="79%" y1="90%" x2="21%" y2="10%">
          <stop offset="5%" stop-color="#4afcfb66"></stop>
          <stop offset="95%" stop-color="#0348a466"></stop>
        </linearGradient>
      </defs>
      <path d="M 0,400 C 0,400 0,160 0,160 C 72.64651322569563,158.93163861216078 145.29302645139126,157.86327722432154 217,157 C 288.70697354860874,156.13672277567846 
              359.47440742013055,155.4785297148746 427,160 C 494.52559257986945,164.5214702851254 558.8093438680866,174.22260391618 616,175 C 673.1906561319134,175.77739608382 
              723.2882171075231,167.63105462040537 788,160 C 852.7117828924769,152.36894537959463 932.0377877018209,145.25317760219855 1005,147 C 1077.962212298179,148.74682239780145 
              1144.560632085194,159.35623497080041 1216,163 C 1287.439367914806,166.64376502919959 1363.719683957403,163.3218825145998 1440,160 C 1440,160 1440,400 1440,400 Z" 
              stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1">
      </path>

      <defs>
        <linearGradient id="gradient" x1="79%" y1="90%" x2="21%" y2="10%">
            <stop offset="5%" stop-color="#4afcfb88"></stop>
            <stop offset="95%" stop-color="#0348a488"></stop>
        </linearGradient>
      </defs>
      <path d="M 0,400 C 0,400 0,240 0,240 C 61.41944349020956,238.17588457574715 122.83888698041912,236.35176915149432 183,238 C 243.16111301958088,239.64823084850568 
      302.06389556853316,244.76880796976988 377,245 C 451.93610443146684,245.23119203023012 542.9055307454483,240.57299896942627 616,232 C 689.0944692545517,223.42700103057373 
      744.3139814496736,210.93919615252491 819,217 C 893.6860185503264,223.06080384747509 987.8385434558572,247.67021642047405 1059,260 C 1130.1614565441428,272.32978357952595 
      1178.3318447268978,272.37993816557884 1238,267 C 1297.6681552731022,261.62006183442116 1368.8340776365512,250.81003091721058 1440,240 C 1440,240 1440,400 1440,400 Z" 
      stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-2">
      </path>

      <defs>
        <linearGradient id="gradient" x1="79%" y1="90%" x2="21%" y2="10%">
          <stop offset="5%" stop-color="#4afcfbff"></stop>
          <stop offset="95%" stop-color="#0348a4ff"></stop>
        </linearGradient>
      </defs>
      <path d="M 0,400 C 0,400 0,320 0,320 C 60.5661284781862,304.832703538303 121.1322569563724,289.66540707660596 186,290 C 250.8677430436276,290.33459292339404 
      320.03710065269667,306.1710752318791 387,315 C 453.96289934730333,323.8289247681209 518.719340432841,325.6502919958777 594,334 C 669.280659567159,342.3497080041223 
      755.0855376159394,357.22775678461016 834,349 C 912.9144623840606,340.77224321538984 984.938509103401,309.4386808656819 1041,304 C 1097.061490896599,298.5613191343181 
      1137.1604259704568,319.0175197526623 1201,326 C 1264.8395740295432,332.9824802473377 1352.4197870147716,326.49124012366883 1440,320 C 1440,320 1440,400 1440,400 Z" 
      stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-3">
      </path>
      
  </svg>
  )
}

export default WavesAnimation 