import { ClassNames } from "@emotion/react";
import styled from "@emotion/styled";
import { FormEvent, useEffect, useState } from "react";
import ReactModal from "react-modal";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import {
  AddUserForm,
  FormLabel,
  HeadTitle,
  UserFormDataWithoutId,
} from "./Users";

type UserProps = {
  id: number;
  name: string;
  surname: string;
  targetHours: number;
  userHourPayment: number;
  userPriority: number;
  onDelete: (userId: number) => void;
  onEdit: (editedUserId: number) => void;
  handleEditSubmit: (
    e: FormEvent,
    editUserID: number,
    editedData: UserFormDataWithoutId
  ) => void;
};

const StyledModal = (props: ReactModal.Props) => (
  <ClassNames>
    {({ css }) => (
      <ReactModal
        {...props}
        className={css`
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
          position: absolute;
          background: #fff;
          -webkit-overflow-scrolling: touch;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
        `}
        overlayClassName={css`
          position: fixed;
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.75);
        `}
      ></ReactModal>
    )}
  </ClassNames>
);

const User: React.FC<UserProps> = ({
  id,
  name,
  surname,
  targetHours,
  userHourPayment,
  userPriority,
  onDelete,
  handleEditSubmit,
}) => {
  useEffect(() => {
    setEditedData({
      name,
      surname,
      targetHours,
      userHourPayment,
      userPriority,
    });
  }, [name, surname, targetHours, userPriority, userHourPayment]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editedData, setEditedData] = useState<UserFormDataWithoutId>({
    name,
    surname,
    targetHours,
    userHourPayment,
    userPriority,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Wrapper>
      <StyledModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(!modalOpen)}
      >
        <AddUserForm onSubmit={(e) => handleEditSubmit(e, id, editedData)}>
          <HeadTitle>Edit user</HeadTitle>
          <FormLabel>
            Name
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleChange}
            />
          </FormLabel>

          <FormLabel>
            Surname
            <input
              type="text"
              name="surname"
              value={editedData.surname}
              onChange={handleChange}
            />
          </FormLabel>

          <FormLabel>
            TargetHours
            <input
              type="number"
              name="targetHours"
              value={editedData.targetHours}
              onChange={handleChange}
            />
          </FormLabel>

          <FormLabel>
            UserPriority
            <input
              type="number"
              name="userPriority"
              value={editedData.userPriority}
              onChange={handleChange}
            />
          </FormLabel>

          <FormLabel>UserHourPayment</FormLabel>
          <select name="userHourPayment" onChange={handleChange}>
            <option value="0">0</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
            <option value="300">300</option>
            <option value="350">350</option>
          </select>
          <button>Edit user</button>
        </AddUserForm>
      </StyledModal>
      <TableTd>
        <NameDataCell>{name}</NameDataCell>
      </TableTd>
      <TableTd>
        <NameDataCell>{surname}</NameDataCell>
      </TableTd>
      <TableTd>
        <HoursColumn>
          <span>{targetHours} hours</span>
          <MonthPayment>
            {targetHours * userHourPayment} CZK / month
          </MonthPayment>
        </HoursColumn>
      </TableTd>
      <TableTd>{userPriority}</TableTd>
      <TableTd>
        <ButtonsDataCell>
          <UserButton onClick={() => setModalOpen(!modalOpen)}>
            <EditOutlinedIcon></EditOutlinedIcon>
          </UserButton>
          <ButtonSpacer></ButtonSpacer>
          <UserButton onClick={() => onDelete(id)}>
            <ClearOutlinedIcon></ClearOutlinedIcon>
          </UserButton>
        </ButtonsDataCell>
      </TableTd>
    </Wrapper>
  );
};

const Wrapper = styled.tr``;

const HoursColumn = styled.div``;

const MonthPayment = styled.p`
  margin: 0;
  font-size: 12px;
`;

const TableTd = styled.td`
  padding-top: 1rem;
`;

const NameDataCell = styled.div`
  text-align: left;
`;

const UserButton = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  border-radius: 10px;
  background: #48e5da;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  border: 0;
  width: 50px;
  height: 50px;
  padding: 0;
`;

const ButtonsDataCell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonSpacer = styled.span`
  padding: 1rem;
`;

export default User;
