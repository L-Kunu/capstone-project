import Button from "./Button";
import styled from "styled-components";
import SearchPage from "./SearchPage";
import ContactCard from "./ContactCard";
import { useState } from "react";

function Card({ lawyer }) {
  lawyer.specialty.map((speciality) => speciality);
  const [show, setShow] = useState(false);
  return (
    <CardWrapper specialty={lawyer.specialty}>
      <h2>{lawyer.name}</h2>

      <CardList data-testid='CardList'>
        {lawyer.specialty.map((speciality, index) => (
          <ListElement key={index}>{speciality}</ListElement>
        ))}
      </CardList>
      {!show && (
        <Button buttonType='showMore' onClick={() => setShow(!show)}>
          Show more
        </Button>
      )}
      {show && (
        <Button buttonType='showLess' onClick={() => setShow(!show)}>
          Show less
        </Button>
      )}
      {show && (
        <ContactCard
          lawyer={lawyer}
          className='show ? display : display:none'
        ></ContactCard>
      )}
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.section`
  background-color: #219ebc;
  color: #1d1045;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 20px;
  border-radius: 15px;
  border-left: 14px solid #ccd;
  opacity: 1;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.2s;

  & h2 {
    margin: 0;
  }
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
`;

const ListElement = styled.li`
  padding: 5px 14px;
  border-radius: 999px;
  background-color: #3d5a80;
  color: #ccd;
`;
