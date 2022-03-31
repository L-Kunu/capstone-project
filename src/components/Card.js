import Button from "./Button";
import styled from "styled-components";
import { Lawyers } from "../Database.js";

function Card({ Lawyer }) {
  return (
    <CardWrapper type={Lawyer.type}>
      <h2>{Lawyer.name}</h2>
      <CardList>
        {Lawyer.type.map((type) => {
          return (
            <List key={type} list={type}>
              {type}
            </List>
          );
        })}
      </CardList>
      <Button buttonType='showMore'>Show more</Button>
      <Button buttonType='showLess'>Show less</Button>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.section`
  background-color: #f0e6ef;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 20px;
  border-radius: 15px;
  border-left: 14px solid #ccd;
  opacity: 1;
  transition: 0.2s;

  & h2 {
    margin: 0;
  }

  ${({ type }) =>
    type.includes("family") &&
    css`
      background-color: #f0a6ca;
    `}
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
`;

const List = styled.li`
  padding: 5px 14px;
  border-radius: 999px;
  background-color: ${(props) =>
    props.list === "family" ? "#f0a6ca" : "#9c89b8"};
`;
