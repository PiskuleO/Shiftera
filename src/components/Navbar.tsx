import styled from "@emotion/styled";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar: React.FC = () => {
  return (
    <NavbarHeader>
      <NavbarNav>
        Shiftera
        <RightIcons>
          <Icon>
            <NotificationsNoneOutlinedIcon sx={{ fontSize: 30 }} />
          </Icon>
          <Icon>
            <AccountCircleOutlinedIcon sx={{ fontSize: 75 }} />
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
    height: 2px;
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
  top: 0;
`;

export default Navbar;
