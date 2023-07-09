import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const Layout: React.FC = () => {
  return (
    <Wrap>
      <SideBar></SideBar>
      <Content>
        <Navbar></Navbar>
        <Fill>
          <Outlet />
        </Fill>
      </Content>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Fill = styled.div`
  padding: 5rem 10rem;
`;
