import styled from "styled-components";

export default function ContactCard({ lawyer }) {
  return (
    <Container>
      <ListElement>{"Location: " + lawyer.location}</ListElement>
      <ListElement>{"Language: " + lawyer.language}</ListElement>
      <ListElement>{"Addresse: " + lawyer.contact.address}</ListElement>
      <ListElement>{"Telephone: " + lawyer.contact.telephone}</ListElement>
      <ListElement>{"Email: " + lawyer.contact.email}</ListElement>
      <ListElement>{"Website: " + lawyer.contact.website}</ListElement>
    </Container>
  );
}

const Container = styled.div`
  dispaly: grid;
  grid-template-colomns: 1fr;
`;

const ListElement = styled.li`
  padding: 5px 14px;
  list-style: none;
  font-soze: 1rem;
`;
