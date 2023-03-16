import { AiOutlineDashboard, AiFillCode } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaCogs } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

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
    link: "/admin/AuditLogs",
  },
  {
    title: "Settings",
    icon: <FaCogs />,
    link: "/admin/Settings",
  },
];

export const UserSidebar = [
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    link: "/user",
  },
  {
    title: "Settings",
    icon: <FaCogs />,
    link: "/user/Settings",
  },
];

export const Supervisorsidebar = [
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    link: "/Dashboard",
  },
  {
    title: "For Approval",
    icon: <BsCheckCircle />,
    link: "/Approval",
  },
  {
    title: "Audit Logs",
    icon: <AiFillCode />,
    link: "/AuditLogs",
  },

  {
    title: "Settings",
    icon: <FaCogs />,
    link: "/Settings",
  },
];
