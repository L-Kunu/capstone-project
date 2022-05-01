import React from 'react';
import styled from 'styled-components';

export default function About() {
	return (
		<StyledInfo>
			<p>
				Finding a lawyer in Germany could be a daunting task, especially if one
				doesn't understand or speak the German language. So, often people rely
				on recommendations from family, friends and even strangers alike. <br />
				But what happens if none of the people around you know a good lawyer
				that specialises in the area that you need legal advise for and you have
				a matter that need urgent legal attention and counselling? <br />
				That is where Law-finty comes in. This platform was created to make it
				easy for none German speaking residents of Germany to easily find
				competent lawyers that can take care of their legal needs with just a
				few clicks.
			</p>
		</StyledInfo>
	);
}

const StyledInfo = styled.article`
	border: 1px solid #38b4cd;
	border-radius: 12px;
	font-size: 1.2rem;
	color: #415a77;
	padding: 20px;
	margin-bottom: 30px;
	text-align: center;
`;
