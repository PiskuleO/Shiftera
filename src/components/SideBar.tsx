import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

const SideBar: React.FC = () => {
  return (
    <SideBarWrapper>
      <MainItems>
        <SideLink to="/">
          <Icon>
            <HomeOutlinedIcon sx={{ fontSize: 50 }}></HomeOutlinedIcon>
          </Icon>
        </SideLink>
        <SideLink to="/users">
          <Icon>
            <SupervisedUserCircleOutlinedIcon
              sx={{ fontSize: 50 }}
            ></SupervisedUserCircleOutlinedIcon>
          </Icon>
        </SideLink>
        <SideLink to="/shifts">
          <Icon>
            <BookOutlinedIcon sx={{ fontSize: 50 }}></BookOutlinedIcon>
          </Icon>
        </SideLink>
      </MainItems>
      <SettingItem>
        <SideLink to="/settings">
          <Icon>
            <SettingsOutlinedIcon sx={{ fontSize: 50 }}></SettingsOutlinedIcon>
          </Icon>
        </SideLink>
      </SettingItem>
    </SideBarWrapper>
  );
};

export default SideBar;
const SettingItem = styled.div``;

const MainItems = styled.div`
  padding-top: 8rem;
`;

const Icon = styled.div`
  padding: 1.5rem;
  :hover {
    background-color: #48e5da;
    border-radius: 1rem;
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
