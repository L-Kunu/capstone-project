import Card from "./components/Card.js";
import Lawyers from "./Database.js";
import styled from "styled-components";
import SearchPage from "./components/SearchPage.js";
import { useState } from "react";
import useLocalStorage from "./Hooks/UseLocalStorage.js";
import Languages from "./components/Languages.js";
import Header from "./components/Header.js";

function App(index) {
  const [lawyerList, setLawyerList] = useLocalStorage("LawyerList", []);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  console.log(filteredLawyers);

  function handleFilter(immigrationChecked, familyChecked) {
    if (immigrationChecked && familyChecked) {
      return setFilteredLawyers(Lawyers);
    } else if (immigrationChecked) {
      return setFilteredLawyers(
        Lawyers.filter((lawyer) => lawyer.specialty.includes("Immigration law"))
      );
    }
    if (familyChecked) {
      return setFilteredLawyers(
        Lawyers.filter((lawyer) => lawyer.specialty.includes("Family law"))
      );
    }
    setFilteredLawyers(Lawyers);
  }
  return (
    <>
      <AppWrapper>
        <Header />
        <Languages />
        <SearchPage onSubmit={handleFilter} />
        <CardGrid>
          {filteredLawyers.map((lawyerElement) => {
            return <Card key={lawyerElement.id} lawyer={lawyerElement} />;
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
