import React,{useState,useEffect,useContext} from 'react'
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import Router from 'next/router';
import axios from "axios";
import {create as ipfsHttpClient} from 'ipfs-http-client';

//internal import
import { NFTMarketplaceABI,NFTMarketplaceAddress } from './constants'; 
//-fetching smart contract
const fetchContract=(signerOrProvider)=>
new ethers.Contract(NFTMarketplaceAddress,NFTMarketplaceABI,signerOrProvider);

//connecting with smart contract
const connectingWithSmartContract=async()=>{
    try {
        const web3Modal=new Web3Modal();
        const connection=await web3Modal.connect();
        const provider=new ethers.providers.Web3Provider(connection);
        const signer=provider.getSigner();
        const contract=fetchContract(signer);
        return contract;

    } catch (error) {
        console.log("Something went wrong while connecting with contract");
    }
}
export const NFTMarketplaceContext=React.createContext();

export const NFTMarketplaceProvider=(({children})=>{
 const titleData="Discover,collect and sell NFTs🖼️";
 const checkContract=async()=>{
    const contract=await connectingWithSmartContract();

    console.log(contract);
 }
    return (
        <NFTMarketplaceContext.Provider value={{checkContract,titleData}}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})