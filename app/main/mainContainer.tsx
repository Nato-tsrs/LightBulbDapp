"use client"
import React, { useEffect, useState } from "react";
import background1 from "@/public/design/background3.svg";
import logo from "@/public/design/logo.svg";
import Image from "next/image";
import button1 from "@/public/design/registration/register1.png";
import image1 from "@/public/design/mainPage/image1.png";
import image2 from "@/public/design/mainPage/image2.png";
import headerButton1 from "@/public/design/mainPage/header-button1.png";
import headerButton2 from "@/public/design/mainPage/header-button2.png";
import left1 from "@/public/design/mainPage/left1.svg";
import left2 from "@/public/design/mainPage/left2.svg";
import left3 from "@/public/design/mainPage/left3.svg";
import etherium from "@/public/design/mainPage/etherium.svg";
import view from "@/public/design/mainPage/view.png";
import pavle from "@/public/design/mainPage/pavlee.jpg";
import decor from "@/public/design/decor.svg"
import logout from "@/public/design/mainPage/logout.svg"
import Link from "next/link";
import house from "@/public/design/registration/house.svg"
const MainComponent=({ideas,detailsPage, mainPage}:any)=>{
    
    return (
        <div
        className="w-full h-[125vh] overflow-hidden px-[22px]"
        style={{
          backgroundImage: `url(${background1.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <Image src={decor} alt="" className="absolute right-0 top-[100px]"/>
        <div className=" flex items-center justify-between h-[100px] pr-[50px]">
  <div className="flex items-center h-full">        <Image src={logo} alt="logo" />
          <Image src={house} className="mt-[25px]" alt="" width="59" />
          <Image
            src={headerButton1}
            className="mt-[25px] w-[160px] h-[45px] ml-[70px]"
            alt=""
          />
          <Image
            src={headerButton2}
            className="mt-[25px] w-[160px] h-[45px] ml-[25px]"
            alt=""
          />
          </div>
          <div className="flex items-center">
            <Image src={pavle} width="50" alt="" className="rounded-[25px] "/>
            <Image src={logout} width="50" alt="" className="ml-[20px]"/>
          </div>
        </div>
        <div className="w-full flex">
          <div
            className="w-[321px] h-[583px] flex flex-col items-center"
            style={{
              backgroundImage: `url(${image1.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          >
            <Image className="mt-[50px]" src={left1} alt="" />
            <Image className="mt-[30px]" src={left2} alt="" />
            <Image className="mt-[30px]" src={left3} alt="" />
          </div>
          <div className="w-[60%] ml-[50px]">
            {ideas?.map((idea:any) => (
              <div className="w-full backdrop-blur-sm  bg-rgba(255, 255, 255, 0.17) flex justify-between p-[25px] color mt-[30px] border-[1px] border-white border-solid">
                <div>
                  <div className="flex">
                    <div className="flex flex-col items-center w-[100px]">
                      <img
                        src={idea.authorsImage}
                        width="50"
                        height="50"
                        className="rounded-[25px] mb-[20px] object-cover w-[50px] h-[50px]"
                        alt=""
                      />
                      <div className="flex flex-col items-center w-[50px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                        >
                          <path
                            d="M7 0L13.0622 10.5H0.937822L7 0Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                         <p className="text-white mb-[5px] mt-[5px]">{idea.rating}</p>
                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
    <path d="M7 9L13.0622 0H0.937822L7 9Z" fill="#D9D9D9"/>
  </svg>
                      </div>
                    </div>
                    <div className="ml-[10px] mr-[10px]">
                      <h2 className="text-[23px]">{idea.ideaName}</h2>
                      <p style={{color:"rgba(255, 255, 255, 0.67)"}}>@{idea.userName}</p>
                      <p className="text-white font-thin">{idea.ideaIntro} ... <Link href="/" className=" font-normal" style={{color:"#5505FF"}}>show more</Link></p>
                    </div>
                  </div>
                  {/* ------------- */}
                  <div>
                    <p className="text-[23px] flex items-center text-white">
                      price: {idea.price}{" "}
                      <Image src={etherium} className="ml-[10px]" alt="" />
                     <Image onClick={()=>{detailsPage(idea);mainPage(false)}} src={view} width="100" className="ml-[30px]" alt=""/>
                    </p>
                  </div>
                </div>
                {/* if immage is selected */}
                {idea.ideaImage && (
                  <div>
                    <Image src={idea.ideaImage} width="480" alt=""/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default MainComponent;