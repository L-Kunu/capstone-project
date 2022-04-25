import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaSearchLocation } from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';

export default function Navigation() {
	return (
		<Navbar>
			<NavLinkStyled to='/'>
				<span>Home</span>
				<AiFillHome size={34} />
			</NavLinkStyled>

			<NavLinkStyled to='/SearchPage'>
				<span>Search page</span>
				<FaSearchLocation size={34} />
			</NavLinkStyled>

			<NavLinkStyled to='/mapPage'>
				<span>Map page</span>
				<RiMapPin2Fill size={34} />
			</NavLinkStyled>
		</Navbar>
	);
}

const Navbar = styled.nav`
	display: flex;
	align-items: center;
	height: 8vh;
`;

const NavLinkStyled = styled(NavLink)`
	display: flex;
	justify-content: space-around;
	width: 100%;
	color: #093764;

	&.active {
		color: #38b4cd;
	}
`;
