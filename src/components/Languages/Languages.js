import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, Route } from 'react-router-dom';
import { getByAltText } from '@testing-library/react';
const languages = {
	ar: 'عربى',
	//chi: "Chinese",
	en: 'English',
	de: 'Deutsch',
	fr: 'Français',
	//fa: 'Persian',
	//es: "Spanish",
	// tr: "Turkish",
};

export default function Languages(lng) {
	const { t, i18n } = useTranslation();

	return (
		<LanguageContainer>
			<Greeting>{t('Greeting')}</Greeting>
			<CallToAction>{t('Action')}</CallToAction>
			{Object.entries(languages).map(([code, name]) => {
				return (
					<>
						<StyledLink>
							<Link to='/' onClick={() => i18n.changeLanguage(code)}>
								{name}
							</Link>
						</StyledLink>
					</>
				);
			})}
		</LanguageContainer>
	);
}
const LanguageContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	margin-bottom: 64px;
`;

const Greeting = styled.h1`
	color: #093764;
	text-align: center;
`;

const CallToAction = styled.h2`
	border: 1px solid #38b4cd;
	border-radius: 12px;
	font-size: 1.2rem;
	color: #415a77;
	padding: 20px;
	margin-bottom: 30px;
	text-align: center;
`;

const StyledLink = styled.li`
	text-decoration: none;
	list-style: none;
	> * {
		text-decoration: none;
		color: #093764;
	}
`;
