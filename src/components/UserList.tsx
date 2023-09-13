import React, { FormEvent } from "react";
import User from "./User";
import { UserFormData, UserFormDataWithoutId } from "./Users";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

type UsersListProps = {
  formData: UserFormData[];
  onDeleteUser: (userId: number) => void;
  onEditUser: (editedUserId: number) => void;
  onEditSubmit: (
    e: FormEvent,
    editUserID: number,
    editedData: UserFormDataWithoutId
  ) => void;
};

const UserList: React.FC<UsersListProps> = ({
  formData,
  onDeleteUser,
  onEditUser,
  onEditSubmit,
}) => {
  return (
    <UserTable>
      <UserTableHead>
        <UserTableTr>
          <NameTh>Name</NameTh>
          <NameTh>Surname</NameTh>
          <HoursTH>TargetHours</HoursTH>
          <UserTableTh>Priority level</UserTableTh>
        </UserTableTr>
      </UserTableHead>
      <UserTableBody>
        {formData.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            surname={user.surname}
            targetHours={user.targetHours}
            userHourPayment={user.userHourPayment}
            userPriority={user.userPriority}
            onDelete={onDeleteUser}
            onEdit={onEditUser}
            handleEditSubmit={onEditSubmit}
          />
        ))}
      </UserTableBody>
    </UserTable>
  );
};

const UserTable = styled.table`
  text-align: center;
  width: 80%;
`;

const UserTableHead = styled.thead``;

const HoursTH = styled.th``;

const UserTableTh = styled.th``;
const UserTableTr = styled.tr`
  position: relative;
  ::after {
    content: " ";
    background: linear-gradient(180deg, #7476fd 0%, #48e5da 100%);
    height: 1px;
    width: calc(100%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
const UserTableBody = styled.tbody``;

const NameTh = styled.th`
  text-align: left;
`;
export default UserList;
