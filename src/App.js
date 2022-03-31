import Card from "./components/Card.js";
import { Lawyers } from "./Database.js";
import styled from "styled-components";
import { nanoid } from "nanoid";

function App() {
  const id = nanoid();
  return (
    <AppWrapper>
      <Tittle>Capstone Project</Tittle>
      <CardGrid>
        {Lawyers.map((lawyerElement) => {
          return <Card key={lawyerElement.id} lawyer={lawyerElement} />;
        })}
      </CardGrid>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.main`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 30px;
  padding: 20px;
`;

const Tittle = styled.h1`
background-color: #e8c2ca;
border. none;
color: #ccd;
padding: 10px 5px;
`;
