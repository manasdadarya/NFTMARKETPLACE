import React from 'react';

//internal import
import Style from '../styles/searchPage.module.css';
import {Slider, Brand,Filter} from '../components/componentsindex';
import { SearchBar } from '../SearchPage/searchPageIndex';
import {NFTCardTwo,Banner} from '../collectionPage/collectionindex';
import images from '../img';

const searchPage = () => {
    const collectionArray=[images.nft_image_2,images.nft_image_3,images.nft_image_1,
        images.nft_image_2,images.nft_image_1,images.nft_image_3,
        images.nft_image_1,images.nft_image_3,];
  return (
    <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground2}/>
        <SearchBar/>
        <Filter/>
        <NFTCardTwo NFTData={collectionArray}/>
        <Slider/>
        <Brand/>
    </div>
  )
}

export default searchPage;