"use client";
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
import user1 from "@/public/design/mainPage/user1.svg";
import user2 from "@/public/design/mainPage/user2.png";
import etherium from "@/public/design/mainPage/etherium.svg";
import view from "@/public/design/mainPage/view.png";
import idea1 from "@/public/design/mainPage/idea1.png";
import idea2 from "@/public/design/mainPage/idea2.svg";
import pavle from "@/public/design/mainPage/pavlee.jpg";
import decor from "@/public/design/decor.svg";
import logout from "@/public/design/mainPage/logout.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Idea } from "../redux/types";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainComponent from "./mainContainer";
import DetailsComponent from "./detailsComponent";
const mainPage = () => {
  const userId = 1;
  const [mainPage, setMainPage] = useState(true);
  const [detailsPage, setDetailsPage] = useState();
  const users = [
    {
      userId: 1,
      userName: "SmartAss",
      ranking: 1,
      ideas: [
        {
          ownerid: 1,
          ideaName: "Talking about coding and blockchain",
          ideaIntro:
            "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
          ideaDescription:
            "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
          authorsImage:
            "https://media.licdn.com/dms/image/D4D03AQGcgpMDhFkAGA/profile-displayphoto-shrink_800_800/0/1676369043041?e=2147483647&v=beta&t=peyQtKkLfGiWhtpRgiQChhEUooVWR3bUTgZ25FEmwWM",
          rating: 24,
          price: "0.0001 ETH",
          userName: "SmartAss",
          ideaImage: idea1,
          rankLevel: 1,
        },
        {
          userId: 2,
          userName: "SmartAss",
          ranking: 2,
          ideas: [
            {
              ownerid: 2,
              ideaName: "Talking about coding and blockchain",
              ideaIntro:
                "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
              ideaDescription:
                "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
              authorsImage:
                "https://vidwheel.com/wp-content/uploads/2018/09/beautiful-beauty-casual-762020.jpg",
              rating: 24,
              price: "0.0001 ETH",
              userName: "Niniko Mgeladze",
              rankLevel: 2,
            },
          ],
        },
        {
          userId: 3,
          userName: "SmartAss",
          ranking: 3,
          ideas: [
            {
              ownerid: 3,
              ideaName: "Talking about coding and blockchain",
              ideaIntro:
                "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
              ideaDescription:
                "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
              authorsImage:
                "https://media.licdn.com/dms/image/C5603AQEsrOigdSivWA/profile-displayphoto-shrink_800_800/0/1538962150096?e=2147483647&v=beta&t=-qVUPGg3_CMGPmLYVFuL80KRAlfo9pNqeseIAlAQVRE",
              rating: 24,
              price: "0.0001 ETH",
              userName: "Shota Mgeladze",
              ideaImage: idea2,
              rankLevel: 3,
            },
          ],
        },
      ],
    },
  ];
  const getUser=(id:any)=>{
    for(const user of users){
      if(user.userId == id){
        return user;
      }
    }
  }
  const ideas = [
    {
      ownerid: 1,
      ideaName: "Talking about coding and blockchain",
      ideaIntro:
        "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
      ideaDescription:
        "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
      authorsImage:
        "https://media.licdn.com/dms/image/D4D03AQGcgpMDhFkAGA/profile-displayphoto-shrink_800_800/0/1676369043041?e=2147483647&v=beta&t=peyQtKkLfGiWhtpRgiQChhEUooVWR3bUTgZ25FEmwWM",
      rating: 24,
      price: "0.001 ETH",
      userName: "SmartAss",
      ideaImage: idea1,
      rankLevel: 1,
    },
    {
      ownerid: 2,
      ideaName: "Talking about coding and blockchain2",
      ideaIntro:
        "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
      ideaDescription:
        "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
      authorsImage:
        "https://vidwheel.com/wp-content/uploads/2018/09/beautiful-beauty-casual-762020.jpg",
      rating: 24,
      price: "0.005 ETH",
      userName: "Niniko Mgeladze",
      rankLevel: 2,
    },
    {
      ownerid: 3,
      ideaName: "Talking about coding and blockchain3",
      ideaIntro:
        "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
      ideaDescription:
        "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
      authorsImage:
        "https://media.licdn.com/dms/image/C5603AQEsrOigdSivWA/profile-displayphoto-shrink_800_800/0/1538962150096?e=2147483647&v=beta&t=-qVUPGg3_CMGPmLYVFuL80KRAlfo9pNqeseIAlAQVRE",
      rating: 24,
      price: "0.01 ETH",
      userName: "Shota Mgeladze",
      ideaImage: idea2,
      rankLevel: 3,
    },
  ];

  return (
    <>{mainPage ? <MainComponent ideas={ideas} detailsPage={setDetailsPage} mainPage={setMainPage} /> : <DetailsComponent idea={detailsPage} getOwner={getUser}/>}</>
  );
};
export default mainPage;
