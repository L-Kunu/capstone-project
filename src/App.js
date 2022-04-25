import Card from './components/Card.js';
import Lawyers from './Database.js';
import styled from 'styled-components';
import SearchPage from './components/SearchPage.js';
import { useState } from 'react';
import useLocalStorage from './Hooks/UseLocalStorage.js';
import Home from './components/Home/Home';
import { Routes, Route, Navlink } from 'react-router-dom';
import Header from './components/Header.js';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation/Navigation.js';
import Map from './components/Map/Map';

function App(index) {
	const [lawyerList, setLawyerList] = useLocalStorage('LawyerList', []);
	const [filteredLawyers, setFilteredLawyers] = useState([]);
	console.log(filteredLawyers);

	function handleFilter(immigrationChecked, familyChecked) {
		if (immigrationChecked && familyChecked) {
			return setFilteredLawyers(Lawyers);
		} else if (immigrationChecked) {
			return setFilteredLawyers(
				Lawyers.filter((lawyer) => lawyer.specialty.includes('Immigration law'))
			);
		}
		if (familyChecked) {
			return setFilteredLawyers(
				Lawyers.filter((lawyer) => lawyer.specialty.includes('Family law'))
			);
		}
		setFilteredLawyers(Lawyers);
	}
	return (
		<>
			<AppWrapper>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} onClick={useTranslation} />
					<Route
						path='/SearchPage'
						element={<SearchPage />}
						onSubmit={handleFilter}
					/>

					<Route path='/Map' element={<Map address={address} />} />
					<CardGrid>
						{filteredLawyers.map((lawyerElement) => {
							return <Card key={lawyerElement.id} lawyer={lawyerElement} />;
						})}
					</CardGrid>
				</Routes>
				<Footer>
					<Navigation />
				</Footer>
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
	overflow-x: scroll;
`;

const CardGrid = styled.div`
	display: grid;
	gap: 30px;
	padding: 20px;
`;

const Footer = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;
`;
