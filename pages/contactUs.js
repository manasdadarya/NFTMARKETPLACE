import React from 'react';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
  } from "react-icons/ti";
import { RiSendPlane2Fill } from 'react-icons/ri';
import {HiOutlineMail} from 'react-icons/hi';

//internal import
import Style from '../styles/contactUs.module.css';
import formStyle from '../AccountPage/Form/Form.module.css';
import {Button} from '../components/componentsindex'
;
const contactUs = () => {
  return (
    <div className={Style.contactus}>
        <div className={Style.contactus_box}>
            <h1>Contact</h1>
            <div className={Style.contactus_box_box}>
                <div className={Style.contactus_box_box_left}>
                   <div className={Style.contactus_box_box_left_item}>
                    <h3>🗺 ADDRESS</h3>
                    <p>
                        Photo booth prism, Mumbai-473226
                    </p>
                </div>
                <div className={Style.contactus_box_box_left_item}>
                    <h3>💌 EMAIL</h3>
                    <p>nc.sample@gmail.com</p>
                </div>
                <div className={Style.contactus_box_box_left_item}>
                    <h3>☎ PHONE</h3>
                    <p>1800-123-456-7890</p>
                </div>
                <div className={Style.contactus_box_box_left_item}>
                    <h3>🌏 SOCIALS</h3>
                    
                    <a href="#">
                        <TiSocialFacebook/>
                    </a>
                    <a href="#">
                        <TiSocialInstagram/>
                    </a>
                    <a href="#">
                        <TiSocialTwitter/>
                    </a>
                    <a href="#">
                        <TiSocialLinkedin/>
                    </a>
                    <a href="#">
                        <TiSocialYoutube/>
                    </a>
                </div>
            </div>
            <div className={Style.contactus_box_box_right}>
                <form >
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text"
                        placeholder='Name'
                        className={formStyle.Form_box_input_userName}
                         />
                    </div>

                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={formStyle.Form_box_input_box}>
                            <div className={formStyle.Form_box_input_box_icon}>
                                <HiOutlineMail/>
                            </div>
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="description">Message
                        </label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="6"
                            placeholder="Briefly describe yourself"
                            ></textarea>
                    </div>
                    <Button
                        btnName='Send Message'
                        icon={<RiSendPlane2Fill/>}
                        handleClick={()=>{}}
                        classStyle={Style.button}
                    />
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
export default contactUs;

