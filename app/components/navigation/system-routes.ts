import { GalleryVerticalIcon, HomeIcon, ActivityIcon } from "lucide-react";

export const systemRoutes = [
    {
        to: "/",
        text: "Home",
        icon: HomeIcon,
    },
    {
        to: "/users",
        text: "Users",
        icon: GalleryVerticalIcon,
    },
    {
        to: "/workflows",
        text: "Workflows",
        icon: ActivityIcon,
    },
    {
        to: "/projects",
        text: "Projects",
        icon: GalleryVerticalIcon,
    }
]