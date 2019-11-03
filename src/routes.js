import Dashboard from "@material-ui/icons/Dashboard";
import Map from "@material-ui/icons/Map";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Volunteers from "views/Voluteers";
import Maps from "views/Map";
import NotificationsPage from "views/Notifications/Notifications.js";
import VictimPage from 'views/Victims'

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "แผนที่",
    icon: Map,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/voluteers",
    name: "อาสาสมัคร",
    icon: Person,
    component: Volunteers,
    layout: "/admin"
  },
  {
    path: "/victims",
    name: "ผู้ประสบภัย",
    icon: Person,
    component: VictimPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
