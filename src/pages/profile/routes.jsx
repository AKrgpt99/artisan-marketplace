import Feed from "./Feed";
import Notifications from "./Notifications.jsx";
import Inbox from "./Inbox";
import Bookmarked from "./Bookmarked";
import Assets from "./Assets";

export default [
  {
    path: "/",
    alerts: 0,
    name: "Feed",
    icon: "dash",
    element: <Feed />,
  },
  {
    path: "/notifications",
    alerts: 0,
    name: "Notifications",
    icon: "notifications",
    element: <Notifications />,
  },
  {
    path: "/inbox",
    alerts: 0,
    name: "Inbox",
    icon: "inbox",
    element: <Inbox />,
  },
  {
    path: "/bookmarked",
    alerts: 0,
    name: "Bookmarked",
    icon: "bookmark",
    element: <Bookmarked />,
  },
  {
    path: "/assets",
    alerts: 0,
    name: "Assets",
    icon: "stack",
    element: <Assets />,
  },
];
