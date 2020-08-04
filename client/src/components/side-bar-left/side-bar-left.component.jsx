import React from 'react';
import {SideBarFixedContainer,
        SideBarContainer} from './side-bar-left.styles';

const SideBarLeft = () => {
    return (
        <SideBarFixedContainer className="leftfixed">
        {/* start sidebar left */}
        <SideBarContainer className="sidebarleft">
          <img src="../images/upload.png" alt='user-1' />
          <p className="sidename">Long Thuoq</p>
          <p className="ssn">Thang Long University</p>
          <p className="country">Viet Name</p>
          <a href = "true" className="viewall">View All</a>
          <hr />
          <p className="nosociety">31</p>
          <p className="societyname">
              <a href ="true">Society</a>
            </p>
          <p className="logout"><a href="../index.html">Log Out</a></p>
        </SideBarContainer>
        {/* End of sidebar left */}
      </SideBarFixedContainer>
    )
}
export default SideBarLeft;