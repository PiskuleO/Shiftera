import styled from "@emotion/styled";
import LogoImage from "../LogoMockup.png";
import { ReactComponent as AccountIc } from "../Users.svg";
import { ReactComponent as NotificationIc } from "../Notifications.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <NavbarHeader>
      <NavbarNav>
        <NavLink to="/" >
        <Logo src={LogoImage} />
          </NavLink>
        <RightIcons>
          <Icon>
            <NotificationIc height="2.5rem"></NotificationIc>
          </Icon>
          <Icon>
            <AccountIc height="5rem"></AccountIc>
          </Icon>
        </RightIcons>
      </NavbarNav>
    </NavbarHeader>
  );
};
const NavbarNav = styled.nav`
  background: white;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 1rem;
  --extra-padding-bottom: 2rem;
  padding-bottom: calc(0.5rem + var(--extra-padding-bottom));
  ::after {
    content: " ";
    background: linear-gradient(180deg, #7476fd 0%, #48e5da 100%);
    height: 1px;
    width: calc(100% - 2 * 10rem);
    position: absolute;
    bottom: var(--extra-padding-bottom);
  }
`;

const Icon = styled.div`
  padding-left: 3rem;
`;

const RightIcons = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavbarHeader = styled.header`
  position: sticky;
  z-index: 1;
  top: 0;
`;

const Logo = styled.img`
  height: 2.5rem;
`;

const NavLink = styled(Link)``;

export default Navbar;
