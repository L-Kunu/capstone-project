import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function SearchPage({ onSubmit, filteredLawyers }) {
	const { t } = useTranslation();
	const handleSubmit = (event) => {
		event.preventDefault();
		const Form = event.target;
		const immigrationChecked = Form.immigration.checked;
		const familyChecked = Form.family.checked;
		console.log(immigrationChecked);
		console.log(familyChecked);
		onSubmit(immigrationChecked, familyChecked);
	};

	return (
		<ContainerWrapper>
			<Form
				onSubmit={handleSubmit}
				aria-labelledby='entry-form-name'
				autoComplete='off'
			>
				<label htmlFor='name-input'>{t('search-page.name.label')}</label>
				<input
					id='name-input'
					name='name-input'
					type='text'
					placeholder={t('search-page.name.placeholder')}
					required
				/>
				<label htmlFor='city-input'>{t('search-page.city.label')}</label>
				<input
					type='text'
					name='city-input'
					id='city-input'
					placeholder={t('search-page.city.placeholder')}
					required
				/>
				<Fieldset>
					<legend>{t('search-page.specialty.legend')}</legend>

					<div>
						<input id='immigration-law' type='checkbox' name='immigration' />
						<label htmlFor='immigration-law'>
							{t('search-page.specialty.options.immigration')}
						</label>
					</div>
					<div>
						<input id='family' type='checkbox' name='family' />
						<label htmlFor='family-law'>
							{t('search-page.specialty.options.family')}
						</label>
					</div>
				</Fieldset>

				<Button buttonType='search' style={{ backgroundColor: 'lightblue' }}>
					{t('search-page.submit')}
				</Button>
			</Form>

			<CardGrid>
				{filteredLawyers.map((lawyerElement) => {
					return <Card key={lawyerElement.id} lawyer={lawyerElement} />;
				})}
			</CardGrid>
		</ContainerWrapper>
	);
}

const ContainerWrapper = styled.div`
	margin-top: -1px;
	display: block;
	padding: 20px;
	margin: 10px;
`;

const Form = styled.form`
	background-color: #415a77;
	border-radius: 14px;
	color: #38b3c8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 16px;
	font-size: 1.5rem;
	margin-bottom: 4rem;

	//box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);

	input {
		flex: 1 1;
		border: 1px solid 38b3c8;
		border-radius: 8px;
		padding: 0.5rem 0.75rem;
		margin-bottom: 12px;
		font-size: 1.2rem;
		outline: none;
		::placeholder {
			color: #c8cbca;
		}
	}
`;

const Fieldset = styled.fieldset`
	border: none;
`;

/*const StyledLink = styled.li`
	text-decoration: none;
	list-style: none;
	text-align: center;
	margin-bottom: 1rem;
	> * {
		text-decoration: none;
		border-radius: 999px;
		color: black;
		padding: 10px;
		background-color: lightblue;
	}
`;*/

const CardGrid = styled.div`
	display: grid;
	gap: 30px;
`;
