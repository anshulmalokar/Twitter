import { CiHome } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";

interface TwitterSideBarButton {
  title: String;
  icon: React.ReactNode;
}

export const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <CiHome />,
  },
  {
    title: "Explore",
    icon: <IoMdSearch />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <CiMail />,
  },
  {
    title: "Bookmark",
    icon: <CiBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <MdAttachMoney />,
  },
  {
    title: "Profile",
    icon: <CiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];
