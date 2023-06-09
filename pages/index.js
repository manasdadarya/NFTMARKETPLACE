import React, {useState,useEffect, useContext } from "react";
 
//internal import
import Style from "../styles/index.module.css";
import { HeroSection ,Service,BigNFTSlider,Subscribe,Title,Category,Filter,NFTCard,Collection,AudioLive,FollowerTab,Slider,Brand,Video} from "../components/componentsindex";

//importing contract data
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const {checkContract}=useContext(NFTMarketplaceContext);

  useEffect(()=>{
    checkContract();
  },[]);
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive/>
      <FollowerTab/>
      <Slider/>
      <Collection/>
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter/>
      <NFTCard/>
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category/>
      <Subscribe/>
      <Brand/>
      <Video/>
    </div>
  );
};

export default Home;
