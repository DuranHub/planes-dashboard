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
        to: "/levels",
        text: "Levels",
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
        to: "/projects",
        text: "Projects",
        icon: MonitorPlayIcon,
    }
]