import { AiOutlineDashboard } from "react-icons/ai";
import { GrStatusInfo } from "react-icons/gr";
import { FaCogs } from "react-icons/fa";

/* Admin Link */

export const UserSidebar = [
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    link: "/user",
  },
  //   {
  //     title: "PO Monitoring",
  //     icon: <GrStatusInfo />,
  //     // link: "/admin/Accounts",
  //   },
  {
    title: "Settings",
    icon: <FaCogs />,
    link: "/user/Settings",
  },
];
