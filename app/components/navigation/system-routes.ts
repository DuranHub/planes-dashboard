import {
    HomeIcon,
    UserRoundCogIcon,
    MonitorPlayIcon,
    ListChecksIcon,
    LandmarkIcon,
} from "lucide-react";

export const systemRoutes = [
    {
        to: "/",
        text: "Home",
        icon: HomeIcon,
    },
    {
        to: "/level-categories",
        text: "Level Categories",
        icon: ListChecksIcon,
    },
    {
        to: "/assignment-areas",
        text: "Assignment Areas",
        icon: LandmarkIcon,
    },
    {
        to: "/users",
        text: "Users",
        icon: UserRoundCogIcon,
    },
    {
        to: "/levels",
        text: "Levels",
        icon: MonitorPlayIcon,
    }
]