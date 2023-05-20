import React from 'react';
import Link from 'next/link';

//internal import
import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  //help center menu
  const helpCenter=[
    {
      name:"About",
      link:"aboutUs"
    },
    {
      name:"Contact Us",
      link:"contactUs"
    },
    {
      name:"Sign Up",
      link:"signUp"
    },
    {
      name:"Sign In",
      link:"login"
    },
    {
      name:"Subscription",
      link:"subscription"
    },
  ]
  return (
    <div className={Style.box}>
      {helpCenter.map((el,i)=>(
          <div key={i+1} className={Style.helpCenter}>
          <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default HelpCenter