import React, { useState } from "react";
import UsersList from "./UsersList";
import styled from "@emotion/styled";

export type UserFormData = {
  id: number;
  name: string;
  surname: string;
  targetHours: number;
  userHourPayment: number;
};

const EventsTraining: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<UserFormData>({
    id: 0,
    name: "",
    surname: "",
    targetHours: 0,
    userHourPayment: 0,
  });
  const [UserFormData, setFormData] = useState<UserFormData[]>([]);

  const handleSubmit = () => {
    setFormData((prevData) => [
      ...prevData,
      { ...currentValue, id: prevData.length },
    ]);
    setCurrentValue({
      id: 0,
      name: "",
      surname: "",
      targetHours: 0,
      userHourPayment: 0,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCurrentValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const deleteUser = (userId: number) => {
    setFormData((prevData) => prevData.filter((data) => data.id !== userId));
  };

  return (
    <div>
      <Background></Background>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={currentValue.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={currentValue.surname}
            onChange={handleChange}
          />
        </label>

        <label>
          TargetHours:
          <input
            type="number"
            name="targetHours"
            value={currentValue.targetHours}
            onChange={handleChange}
          />
        </label>

        <label>
          UserHourPayment:
          <select name="userHourPayment" onChange={handleChange}>
            <option value="0">0</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
            <option value="300">300</option>
            <option value="350">350</option>
          </select>
        </label>
      </form>
      <button onClick={handleSubmit}>SEND</button>
      <UsersList formData={UserFormData} onDeleteUser={deleteUser}></UsersList>
    </div>
  );
};

const Background = styled.div`
  background: white;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: fixed;
  inset: 0;
  z-index: -1;
`;

export default EventsTraining;
