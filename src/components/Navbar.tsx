import styled from "@emotion/styled";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar: React.FC = () => {
  return (
    <header>
      <NavbarWrapper>
        Ahoj
        <RightIcons>
          <Icon>
            <NotificationsNoneOutlinedIcon sx={{ fontSize: 50 }} />
          </Icon>
          <Icon>
            <AccountCircleOutlinedIcon sx={{ fontSize: 100 }} />
          </Icon>
        </RightIcons>
      </NavbarWrapper>
    </header>
  );
};

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

const NavbarWrapper = styled.nav`
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
  padding-bottom: 0.5rem;
  position: relative;
  ::after {
    content: " ";
    background: var(--bg, linear-gradient(180deg, #7476fd 0%, #48e5da 100%));
    height: 2px;
    width: calc(100% - 2 * 10rem);
    position: absolute;
    bottom: 0;
  }
`;

export default Navbar;
