import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
	return (
		<HeaderContainer>
			<StyledLink>
				<Link to='/'>
					<Tittle>{<img src='/images/Union3.png' />}</Tittle>
				</Link>
			</StyledLink>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	height: 400px;
	display: flex;
	background-image: url('https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	margin-bottom: 50px;
`;
const StyledNavLink = styled(NavLink)`
	text-decoration: none;
`;

const Tittle = styled.h1`
	margin-top: -45px;
	padding: 10px;
	text-align: center;
	width: 100vw;
	//background-color: #00c2cb;
`;

const StyledLink = styled.li`
	text-decoration: none;
	list-style: none;
	padding: 45px;

	> * {
		text-decoration: none;
		color: #093764;
	}
`;
