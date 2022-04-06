import React from "react";
import Button from "./Button";
import styled from "styled-components";

export default function SearchPage({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const Form = event.target;
    const immigrationChecked = Form.immigration.checked;
    const familyChecked = Form.family.checked;
    console.log(familyChecked);

    onSubmit(immigrationChecked, familyChecked);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      aria-labelledby='entry-form-name'
      autoComplete='off'
    >
      <label htmlFor='text'>Your name</label>
      <input
        id='name-input'
        name='name-input'
        type='text'
        placeholder='Add your name here'
      />
      <label htmlFor='text'>Your city</label>
      <input
        type='text'
        name='city-input'
        id='city-input'
        placeholder='Add the name of your city here'
      />
      <span>Choose the kind of lawyer you are looking for</span>
      <div>
        <label htmlFor='immigration-law'>Immigration</label>
        <input id='immigration-law' type='checkbox' name='immigration' />
      </div>
      <div>
        <label htmlFor='family-law'>Family</label>
        <input id='family' type='checkbox' name='family' />
      </div>
      <Button buttonType='search'>Search</Button>
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
        display: block;
      }
`;
