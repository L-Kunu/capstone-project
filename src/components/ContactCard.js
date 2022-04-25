import styled from "styled-components";

export default function ContactCard({ lawyer }) {
  return (
    <Container>
      <ListElement>
        <Props>Location:</Props>
        {" " + lawyer.location}
      </ListElement>
      <ListElement>
        <Props>Language:</Props>
        {" " + lawyer.language}
      </ListElement>
      <ListElement>
        <Props>Address:</Props>
        {" " + lawyer.contact.address}
      </ListElement>
      <ListElement>
        <Props>Telephone:</Props>
        {" " + lawyer.contact.telephone}
      </ListElement>
      <ListElement>
        <Props>Email:</Props>
        {" " + lawyer.contact.email}
      </ListElement>
      <ListElement>
        <Props>Website:</Props>
        {" " + lawyer.contact.website}
      </ListElement>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const ListElement = styled.li`
  padding: 5px 14px;
  list-style: none;
  font-size: 1rem;
`;

const Props = styled.span`
  font-weight: bold;
`;
