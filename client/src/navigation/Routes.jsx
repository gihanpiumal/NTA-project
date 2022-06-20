import {
  Home,
} from "../pages";
import PrivateRoutes from "./PrivateRoutes";
import { DashBoardLayOut } from "../components/layouts/dashBoard";
import { RoutesConstant, StringConstant } from "../assets/constants";
import React from "react";

export default () => {
  return [
    <PrivateRoutes
      exact
      key="home"
      path={RoutesConstant.home}
      component={Home}
      isLayOut={true}
      Layout={DashBoardLayOut}
      accessLevel={StringConstant.admin}
    />,
  ];
};
