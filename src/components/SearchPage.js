import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useState } from "react";

export default function SearchPage({ onSubmit }) {
  const [name, setName] = useState("");
  const [speciality, setSpecialty] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function filter(speciality, []) {
    setSpecialty(
      speciality.filter(
        (immigration, family) => immigration.family.idex == lawyerIdex
      )
    );
  }
  return (
    <Form
      onSubmit={handleSubmit}
      aria-labelledby='entry-form-name'
      autoComplete='off'
    >
      <label htmlFor='text'>Your name</label>
      <input
        id='name-input'
        name='text'
        type='text'
        className='text'
        placeholder='Add your name here'
      />
      <label htmlFor='text'>Your city</label>
      <input
        type='text'
        id='city-input'
        className='text'
        placeholder='Add the name of your city here'
      />
      <label htmlFor='checkbox'>
        Choose the kind of lawyer you are looking for
      </label>
      <div className=''>
        <input
          type='checkbox'
          name='Immigration'
          className='immigration ckeckbox'
        />
        Immigration
      </div>
      <div>
        <input type='checkbox' name='Family' className='family checkbox' />
        Family
      </div>
      <Button buttonType='search' onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    flex: 1 1;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    margin-bottom: 12px;
    outline: none;
    ::placeholder {
      color: #c8cbca;
    }
    
    
    input[type='checkbox']{
        height: 16px;
        width: 16px;
    }
    

    div {
        margin-top: -1px;
      }
`;
