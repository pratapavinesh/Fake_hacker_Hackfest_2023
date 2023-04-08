
import CoinsPage from "crypto/Pages/CoinPage";
import HomePage from "crypto/Pages/HomePage";
import Dashboard from "admin/views/Dashboard.js";
import UserProfile from "admin/views/UserProfile.js";
import About from "admin/views/About.js";
import Icons from "admin/views/Icons.js";
import Map from "admin/views/Map.js";
import Notifications from "admin/views/Notifications.js";
import Rtl from "admin/views/Rtl.js";
import TableList from "admin/views/TableList.js";
import Typography from "admin/views/Typography.js";

var routes = [
  {
    path: "/",
    name: "HomePage",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: HomePage,
    layout: "/cryptocurrency"
  },
  {
    path: "/coins/:id",
    name: "CoinsPage",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: CoinsPage,
    layout: "/cryptocurrency"
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/about",
    name: "About",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-notes",
    component: About,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  }
];
export default routes;
