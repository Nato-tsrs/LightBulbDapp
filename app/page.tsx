
"use client"
import { ethers } from 'ethers';
import Image from "next/image";
import background1 from '@/public/design/background3.svg'
import logo from '@/public/design/logo.svg'
import button from '@/public/design/BUTTON.svg'
import decor from '@/public/design/decor.svg'
import background2 from '@/public/design/packground2.svg'
import button1 from '@/public/design/button3.png'
import button2 from '@/public/design/button4.png'
import registrationHeading from '@/public/design/registration-headline.svg'
import Link from "next/link";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function Home() {
  return (
    <Provider store={store}>
  <div className="w-full h-[125vh] overflow-hidden" style={{ backgroundImage: `url(${background1.src})`,backgroundRepeat:'no-repeat', backgroundPosition:"top" }}>
    <div>
      <Image 
      src={logo}
      alt="logo"
      />
    </div>
    <div className="md:flex md:px-16 md:py-4 justify-between items-center" style={{zIndex:"2"}}>
      <Image src={registrationHeading} alt="headline"/>
      <div className=" w-full md:max-w-[782px] h-[497px] md:flex flex-col items-center p-[100px]" style={{background:"rgba(255, 255, 255, 0.08)"}}>
        <Link href="/register-as-company" className="mb-[18px]">
         <Image src={button1} alt="button1"/>
        </Link>
        <Link href="/register-as-individual">
          <Image src={button2} alt="button2" />
        </Link>
        <p className="text-[#FFFF] text-[23px] mt-[30px]">
        already have an account? <Link href="/" className="text-[#24A3FF] "> log in</Link>
        </p>
        
      </div>
      
    </div>
    <Image src={decor} alt="" className="" style={{position:"absolute", top:"58vh", right:0, zIndex:"0"}}/>
  </div>
  </Provider>
  );
}
