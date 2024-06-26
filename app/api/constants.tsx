import idea1 from "@/public/design/mainPage/idea1.png";
import idea2 from "@/public/design/mainPage/idea2.svg";

export var users = [
  {
    userId: 1,
    userName: "SmartAss",
    ranking: 1,
    ideas: [
      {
        ownerid: 1,
        address: "0xEe6472Ccf45c0a2D69C598b4BA7eDbBb99F90df7",
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
    ],
  },
  {
    userId: 2,
    address: "0x182448fC5F3B1b560F19140bDa2dD75E1258a2d6",
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
    address: "0xa54c65272Ef049dC8655452B4a32CE92ba1b515e",
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
];
export let currentUser = users[0];
export var ideas = [
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
];
