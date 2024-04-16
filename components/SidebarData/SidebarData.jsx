import React from 'react'
import {
    BsFillHouseDoorFill,
    BsFlag,
    BsMusicNote,
    BsFillClockFill,
    BsCollectionPlay,
    BsFillExclamationOctagonFill,
    BsSignIntersectionFill,
} from "react-icons/bs";
import { TbSettings } from "react-icons/tb";

export const SidebarData = [
    {
        title: "Home",
        icons: <BsFillHouseDoorFill />,
        links: "/",
    },
    {
        title: "History",
        icons: <BsFillClockFill />,
        links: "/History",
    },
    {
        title: "Video",
        icons: <BsCollectionPlay />,
        links: "/Video",
    },
    {
        title: "Music",
        icons: <BsMusicNote />,
        links: "/Music",
    },
    {
        title: "Settings",
        icons: <TbSettings />,
        links: "/Settings",
    },
    {
        title: "Report Bug",
        icons: <BsFillExclamationOctagonFill />,
        links: "/Bug Report",
    },
    {
        title: "Send Feedback",
        icons: <BsFlag />,
        links: "/Feedback",
    },
    {
        title: "Signup",
        icons: <BsSignIntersectionFill />,
        links: "/Signup",
    }

]