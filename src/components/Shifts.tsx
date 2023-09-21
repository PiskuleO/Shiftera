import styled from "@emotion/styled";
import {
  ContentWrapper,
  ContentHead,
  HeadTitle,
  ButtonParagraph,
  LargeButton,
} from "./Users";

const Shifts: React.FC = () => {
  return (
    <ContentWrapper>
      <ContentHead>
        <HeadTitle>Shifts</HeadTitle>
        <ButtonGroup>
          <MediumButton>
            <ButtonParagraph>Vacations</ButtonParagraph>
          </MediumButton>
          <ButtonSpacer></ButtonSpacer>
          <LargeButton>
            <ButtonParagraph>Manage shifts</ButtonParagraph>
          </LargeButton>
        </ButtonGroup>
      </ContentHead>
    </ContentWrapper>
  );
};

const ButtonGroup = styled.div`
  display: flex;
`;

const ButtonSpacer = styled.div`
  padding: 0rem 1rem 0rem 1rem;
`;

export const MediumButton = styled.button`
  border-radius: 10px;
  background: #48e5da;
  color: white;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
  border: 0;
  margin: 0;
  width: 175px;
  height: 60px;
  flex-shrink: 0;
  padding: 0;
  cursor: pointer;
`;

export default Shifts;
