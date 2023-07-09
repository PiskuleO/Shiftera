import React from "react";
import User from "./User";
import { UserFormData } from "./Users";

type UsersListProps = {
  formData: UserFormData[];
  onDeleteUser: (userId: number) => void;
};

const UsersList: React.FC<UsersListProps> = ({ formData, onDeleteUser }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>TargetHours</th>
          <th>Payout</th>
          <th>UserHourPayment</th>
          <th>Options</th>
        </tr>
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
            onDelete={onDeleteUser}
          />
        ))}
      </tbody>
    </table>
  );
};
export default UsersList;
