import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaSearchLocation } from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';
import { BsInfoSquareFill } from 'react-icons/bs';

export default function Navigation() {
	return (
		<Navbar>
			<NavLinkStyled to='/'>
				<span></span>
				<AiFillHome size={34} />
			</NavLinkStyled>

			<NavLinkStyled to='/SearchPage'>
				<span></span>
				<FaSearchLocation size={34} />
			</NavLinkStyled>

			{/*<NavLinkStyled to='./Card'>
				<span></span>
				<FaSearchLocation size={34} />
	</NavLinkStyled>*/}
			<NavLinkStyled to='/About'>
				<span></span>
				<BsInfoSquareFill size={34} />
			</NavLinkStyled>
		</Navbar>
	);
}

const Navbar = styled.nav`
	display: flex;
	align-items: center;
	height: 8vh;
	margin-top: 20px;
`;

const NavLinkStyled = styled(NavLink)`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	color: #093764;

	&.active {
		color: #9ceaef;
	}
`;
