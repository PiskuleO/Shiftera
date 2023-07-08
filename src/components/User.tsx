import styled from "@emotion/styled";

type UserProps = {
  id: number;
  name: string;
  surname: string;
  targetHours: number;
  userHourPayment: number;
  onDelete: (userId: number) => void;
};

const User: React.FC<UserProps> = ({
  id,
  name,
  surname,
  targetHours,
  userHourPayment,
  onDelete,
}) => {
  return (
    <Wrapper>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{targetHours}</td>
      <td>{targetHours * userHourPayment}</td>
      <td>{userHourPayment}</td>
      <td>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </Wrapper>
  );
};

const Wrapper = styled.tr``;

export default User;
