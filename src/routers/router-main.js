import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "../components/Home";
// @ts-ignore
import Login from "../components/Login";
// @ts-ignore
import Signup from "../components/Signup";
// @ts-ignore
import Profile from "../components/Profile";
// @ts-ignore
import CreateList from "../components/CreateList";
// @ts-ignore
import DisplayList from "../components/DisplayList";
// @ts-ignore
import PopularLists from "../components/PopularLists";
// @ts-ignore
import LatestLists from "../components/LatestLists";
// @ts-ignore
import HomeDisplay from "../components/HomeDisplay";
// @ts-ignore
import ProfileSetting from "../components/ProfileSetting";
// @ts-ignore
import Notifications from "../components/Notifications";
// @ts-ignore
import UserFavorites from "../components/UserFavorites";
//@ts-ignore
import Item from "../components/Item";
//@ts-ignore
import DisplayDemanded from "../components/DisplayDemanded";
// @ts-ignore
import Demand from "../components/Demand";
// @ts-ignore
import Timeline from "../components/Timeline";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "home",
          component: HomeDisplay
        }
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/:id/profile",
      component: Profile,
      children: [
        {
          path: "/:id/profile/notifications",
          component: Notifications
        },
        {
          path: "/:id/profile/timeline",
          component: Timeline
        },
        {
          path: "/:id/profile/",
          component: UserFavorites
        }
      ]
    },
    {
      path: "/create",
      component: CreateList
    },
    {
      path: "/lists/:id",
      name: "list-display",
      component: DisplayList
    },
    {
      path: "/popular-lists",
      component: PopularLists
    },
    {
      path: "/latest-lists",
      component: LatestLists
    },
    {
      path: "/items/:id",
      component: Item
    },
    {
      path: "/demanded",
      component: DisplayDemanded
    },
    {
      path: "/demand",
      component: Demand
    }
  ]
});
