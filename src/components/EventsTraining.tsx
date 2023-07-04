import React, { useState, useMemo } from "react";
import UsersList from "./UsersList";
import styled from "@emotion/styled";

export type UserFormData = {
  name: string;
  surname: string;
  targetHours: number;
  userHourPayment: number;
};

const EventsTraining: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<UserFormData>({
    name: "",
    surname: "",
    targetHours: 0,
    userHourPayment: 0,
  });
  const [UserFormData, setFormData] = useState<UserFormData[]>([]);

  const handleSubmit = () => {
    setFormData((prevData) => [...prevData, currentValue]);
    setCurrentValue({
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
    setCurrentValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div>
      <Background></Background>
      <form>
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
          <select
            name="userHourPayment"
            /*onChange={(e) => {
              setHourPayment(parseInt(e.target.value));
            }}*/
            onChange={handleChange}
          >
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
      <UsersList formData={UserFormData}></UsersList>
      {/*formData.map((user) => (
        <UsersList
          key={uuid()}
          name={user.name}
          surname={user.surname}
          targetHours={user.targetHours}
        />
      ))*/}
    </div>
  );
};

const Background = styled.div`
  background: linear-gradient(180deg, #7476fd 0%, #48e5da 100%);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: fixed;
  inset: 0;
  z-index: -1;
`;

export default EventsTraining;
