import React, { useState } from "react";
import UsersList from "./UsersList";
import styled from "@emotion/styled";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export type UserFormData = {
  id: number;
  name: string;
  surname: string;
  targetHours: number;
  userHourPayment: number;
};

const Users: React.FC = () => {
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
    <ContentWrapper>
      <ContetHead>
        <HeadTitle>Users</HeadTitle>
        <AddUserButton>
          <ButtonParagraph>Add new user</ButtonParagraph>
        </AddUserButton>
      </ContetHead>
      <ContentFilters>
        <SearchBar>
          <Icon>
            <SearchOutlinedIcon sx={{ color: `#48E5DA` }}></SearchOutlinedIcon>
          </Icon>
          <SearchInput
            type="text"
            placeholder="Type a phrase to search"
          ></SearchInput>
        </SearchBar>
        <Filters>
          <Filter>
            <p>Filter by</p>
            <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
          </Filter>
          <Filter>
            <p>Sort by</p>
            <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
          </Filter>
        </Filters>
      </ContentFilters>
    </ContentWrapper>
    /*
    <div>
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
    */
  );
};
const Filters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Filter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Montserrat;
  padding-left: 1rem;
  border: 0;
  cursor: pointer;
  background-color: white;
  color: #48e5da;
`;

const Icon = styled.div`
  padding-right: 1rem;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchInput = styled.input`
  font-family: Montserrat;
  border: 0;
  border-bottom: 1px solid black;
  color: #48e5da;
`;

const ContentFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
`;

const ButtonParagraph = styled.p`
  margin: 0;
  color: #fff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AddUserButton = styled.button`
  border-radius: 10px;
  background: #48e5da;
  color: white;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
  border: 0;
  margin: 0;
  width: 250px;
  height: 60px;
  flex-shrink: 0;
  padding: 0;
  cursor: pointer;
`;

const HeadTitle = styled.h1``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContetHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Users;
