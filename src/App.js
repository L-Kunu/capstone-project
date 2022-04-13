import Card from "./components/Card.js";
import Lawyers from "./Database.js";
import styled from "styled-components";
import { nanoid } from "nanoid";
import SearchPage from "./components/SearchPage.js";
import { useState } from "react";

function App(index) {
  const id = nanoid();
  const [immigrationSearch, setImmigrationSearch] = useState(false);
  const [familySearch, setFamilySearch] = useState(false);
  const [LawyerList, setLawyerList] = useState(Lawyers);

  const immigrationLaw = Lawyers.filter((lawyer) =>
    lawyer.specialty.includes("Immigration law")
  );

  const familyLaw = Lawyers.filter((lawyer) =>
    lawyer.specialty.includes("Family law")
  );

  function handleFilter(immigrationChecked, familyChecked) {
    setImmigrationSearch(immigrationChecked);
    setFamilySearch(familyChecked);
    showResult();
  }

  function showResult() {
    if (immigrationSearch & !familySearch) {
      setLawyerList(immigrationLaw);
    }

    if (familySearch & !immigrationSearch) {
      setLawyerList(familyLaw);
    } else setLawyerList(Lawyers);
  }
  return (
    <>
      <AppWrapper>
        <Tittle>Capstone Project</Tittle>
        <SearchPage onSubmit={handleFilter} />
        <CardGrid>
          {LawyerList.map((lawyerElement) => {
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
