import React from 'react';
import Image from 'next/image';

//internal import 
import Style from '../styles/aboutUs.module.css';
import { Brand } from '../components/componentsindex';
import images from '../img';

const aboutUs = () => {
    const founderArray=[
        {
            name:"Nia O' Shea",
            position:"Co-founder and Chief Executive",
            images:images.founder1,
        },
        {
            name:"Daniel Jame",
            position:"Co-founder and Chief Executive",
            images:images.founder2,
        },
        {
            name:"Orla Dawyer",
            position:"Co-founder and Chairman",
            images:images.founder3,
        },
        {
            name:"Dara Frazier",
            position:"Co-founder and Chief Strategy Officer",
            images:images.founder4,
        },
    ];

    const factsArray=[
        {
            title:'10 million',
            info: "Articles have been public around the world ",
        },
        {
            title: "100,000",
            info: "Registered users account till date",
        },
        {
            title: "220+",
            info: "Countries and regions have our presence ",
        },
    ];
  return (
    <div className={Style.aboutUs}>
        <div className={Style.aboutUs_box}>
            <div className={Style.aboutUs_box_hero}>
                <div className={Style.aboutUs_box_hero_left}>
                    <h1>👋 About Us</h1>
                    <p>
                        We're impartial and independent, and every day we create
                        distinctive, world-class programmes and content which inform,
                        educate and entertain millions of people in the around the world.
                    </p>
                </div>
                <div className={Style.aboutUs_box_hero_right}>
                    <Image
                        src={images.hero2}
                    />
                </div>
            </div>

            <div className={Style.aboutUs_box}>
                <h2>⛱ Founder</h2>
                <p>
                    We’re impartial and independent, and every day we create
                    distinctive, world-class programmes and content
                </p>
            </div>

            <div className={Style.aboutUs_box_founder}>
                <div className={Style.aboutUs_box_founder_box}>
                    {founderArray.map((el,i)=>(
                        <div className={Style.aboutUs_box_founder_box_img}>
                            <Image
                                src={el.images}
                                alt={el.name}
                                width={500}
                                height={500}
                                className={Style.aboutUs_box_founder_box_img_img}
                            />
                            <h3>{el.name}</h3>
                            <p>{el.position}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={Style.aboutUs_box_title}>
                <h2>🚀 Fast Facts</h2>
                <p>
                    We’re impartial and independent, and every day we create
                    distinctive, world-class programmes and content
                </p>
            </div>

            <div className={Style.aboutUs_box_facts}>
                <div className={Style.aboutUs_box_facts_box}>
                    {factsArray.map((el,i)=>(
                        <div className={Style.aboutUs_box_facts_box_info}>
                            <h3>{el.title}</h3>
                            <p>{el.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Brand/>
    </div>
  )
}

export default aboutUs;