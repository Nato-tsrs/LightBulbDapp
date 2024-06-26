// ideasSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Idea } from "./types";
import user1 from "@/public/design/mainPage/user1.svg";
import user2 from "@/public/design/mainPage/user2.png";
import idea1 from "@/public/design/mainPage/idea1.png";
import idea2 from "@/public/design/mainPage/idea2.svg";
import pavle from "@/public/design/mainPage/pavlee.jpg";
interface IdeasState {
  ideas: Idea[];
}

const initialState: IdeasState = {
  ideas: [
    {
      ideaName: "Talking about coding and blockchain",
      ideaIntro:
        "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
      ideaDescription:
        "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
      authorsImage: pavle,
      rating: 24,
      price: "0.0001 ETH",
      userName: "SmartAss",
      ideaImage: idea1,
      rankLevel: 1,
    },
    {
      ideaName: "Talking about coding and blockchain",
      ideaIntro: "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
      ideaDescription: "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
      authorsImage: user1,
      rating: 24,
      price: "0.0001 ETH",
      userName: "Niniko Mgeladze",
      rankLevel: 2,
      ideaImage: undefined
    },
    {
      ideaName: "Talking about coding and blockchain",
      ideaIntro:
        "Talk about coding and blockchain instead of taking a vacation, idea skyrockets mental mental health",
      ideaDescription:
        "Coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain, coding and blockchain",
      authorsImage: user2,
      rating: 24,
      price: "0.0001 ETH",
      userName: "Shota Mgeladze",
      ideaImage: idea2,
      rankLevel: 3,
    },
  ],
};

const ideasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    setIdeas: (state, action: PayloadAction<Idea[]>) => {
      state.ideas = action.payload;
    },
    addIdea: (state, action: PayloadAction<Idea>) => {
      state.ideas.push(action.payload);
    },
    // Add reducers for other actions like updateIdea, deleteIdea, etc.
  },
});

export const { setIdeas, addIdea } = ideasSlice.actions;
export default ideasSlice.reducer;
