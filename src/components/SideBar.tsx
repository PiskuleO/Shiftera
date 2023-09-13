import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIc } from "../Home.svg";
import { ReactComponent as UsersIc } from "../NavbarUsers.svg";
import { ReactComponent as ShiftsIc } from "../Shifts.svg";
import { ReactComponent as SettingsIc } from "../Settings.svg";

const SideBar: React.FC = () => {
  return (
    <SideBarWrapper>
      <MainItems>
        <SideLink to="/">
          <Icon>
            <HomeIc></HomeIc>
          </Icon>
        </SideLink>
        <IconSpacer></IconSpacer>
        <SideLink to="/users">
          <Icon>
            <UsersIc></UsersIc>
          </Icon>
        </SideLink>
        <IconSpacer></IconSpacer>
        <SideLink to="/shifts">
          <Icon>
            <ShiftsIc></ShiftsIc>
          </Icon>
        </SideLink>
      </MainItems>
      <SettingItem>
        <SideLink to="/settings">
          <Icon>
            <SettingsIc></SettingsIc>
          </Icon>
        </SideLink>
      </SettingItem>
    </SideBarWrapper>
  );
};

export default SideBar;

const IconSpacer = styled.div`
  padding: 1rem;
`;
const SettingItem = styled.div``;

const MainItems = styled.div`
  padding-top: 8rem;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  :hover {
    background-color: #adfffa;
    border-radius: 1rem;
    transition: 0.5s;
  }
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  position: sticky;
  top: 0;
`;
const SideLink = styled(Link)``;
