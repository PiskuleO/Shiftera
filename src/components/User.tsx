import styled from "@emotion/styled";
import { UserFormData } from "./EventsTraining";

const User: React.FC<UserFormData> = ({
  name,
  surname,
  targetHours,
  userHourPayment,
}) => {
  return (
    <Wrapper>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{targetHours}</td>
      <td>{targetHours * userHourPayment}</td>
      <td>{userHourPayment}</td>
    </Wrapper>
  );
};

const Wrapper = styled.tr``;

export default User;
