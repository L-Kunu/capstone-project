import Card from "./components/Card.js";
import Lawyers from "./Database.js";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchPage from "./components/SearchPage.js";

function App(index) {
  const id = nanoid();
  return (
    <>
      <AppWrapper>
        <Tittle>Capstone Project</Tittle>
        <SearchPage />
        <CardGrid>
          {Lawyers.map((lawyerElement) => {
            return <Card key={lawyerElement.index} lawyer={lawyerElement} />;
          })}
        </CardGrid>
      </AppWrapper>
    </>
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
background-color: #023047;
box-shadow: 0 4px 8px 0 rgb(39, 50, 47, 0.25);
border. none;
color: #ccd;
margin-top: -15px;
padding: 10px 5px;
text-align: center;
width: 100vw;
`;
