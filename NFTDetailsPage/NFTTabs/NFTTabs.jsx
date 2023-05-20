import React from 'react';
import Image from 'next/image';

//internal import
import Style from './NFTTabs.module.css';

const NFTTabs = ({dataTab,icon}) => {
  return (
    <div className={Style.NFTTabs}>
        {dataTab.map((el,i)=>(
            <div className={Style.NFTTabs_box} key={i+1}>
            <Image
                className={Style.NFTTabs_box_img}
                src={el}
                alt='profile-img'
                width={40}
                height={40}
            />
            <div className={Style.NFTTabs_box_info}>
                <span>
                Offer by $770 by <span>Shoaib Wasim</span>
              {icon}
                </span>

                <small>Oct 29 - 7:30 PM</small>
            </div>
            </div>
        ))}
    </div>
  );
};

export default NFTTabs;