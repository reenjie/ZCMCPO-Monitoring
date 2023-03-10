import { AiOutlineDashboard, AiFillCode } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaCogs } from "react-icons/fa";

/* Admin Link */

export const AdminSidebar = [
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    link: "/admin",
  },
  {
    title: "Accounts",
    icon: <RiAccountCircleLine />,
    link: "/admin/Accounts",
  },

  {
    title: "Audit Logs",
    icon: <AiFillCode />,
    link: "/admin/e",
  },
  {
    title: "Settings",
    icon: <FaCogs />,
    link: "/admin/Settings",
  },
];
