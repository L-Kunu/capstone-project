import React from 'react';
import Languages from '../Languages/Languages';
import { Router as Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
	return (
		<>
			<Languages />
		</>
	);
}

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	border: none;
	border-radius: 999px;
	padding: 12px 26px;
	background-color: #caf0f8;
	font-size: 1.3rem;
	align-self: center;
`;
