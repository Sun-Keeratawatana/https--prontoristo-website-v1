import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <div>Menu</div>
        <SidebarLink to="/">Register</SidebarLink>
        <SidebarLink to="/">Login</SidebarLink>
        <SidebarLink to="/result">Search Restaurant ver API</SidebarLink>
        <SidebarLink to="/test">Search Restaurant version mock + layout</SidebarLink>

      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Book Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
