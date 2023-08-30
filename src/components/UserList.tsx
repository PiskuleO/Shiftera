import React, { FormEvent, useEffect } from "react";
import User from "./User";
import { UserFormData, UserFormDataWithoutId } from "./Users";
import styled from "@emotion/styled";

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
      <thead>
        <UserTableTr>
          <NameTh>Name</NameTh>
          <NameTh>Surname</NameTh>
          <HoursTH>TargetHours</HoursTH>
          <UserTableTh>Priority level</UserTableTh>
        </UserTableTr>
      </thead>
      <tbody>
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
      </tbody>
    </UserTable>
  );
};

const UserTable = styled.table`
  text-align: center;
`;

const HoursTH = styled.th``;

const UserTableTh = styled.th``;
const UserTableTr = styled.tr``;

const NameTh = styled.th`
  text-align: left;
`;
export default UserList;
