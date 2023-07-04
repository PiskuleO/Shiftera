import React from "react";
import User from "./User";
import { UserFormData } from "./EventsTraining";
import uuid from "react-uuid";

type UsersListProps = {
  formData: UserFormData[];
};

const UsersList: React.FC<UsersListProps> = ({ formData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>TargetHours</th>
          <th>Payout</th>
          <th>UserHourPayment</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((user) => (
          <User
            key={uuid()}
            name={user.name}
            surname={user.surname}
            targetHours={user.targetHours}
            userHourPayment={user.userHourPayment}
          />
        ))}
      </tbody>
    </table>
  );
};
export default UsersList;
