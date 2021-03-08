import styled from "styled-components";

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: cyan;
  background-color: black;
  border: 2px solid cyan;
  transition: all 0.2s ease;
  line-height: 1;

  :hover,
  :focus {
    outline: none;
    color: black;
    background-color: cyan;
    border: 2px solid black;
  }
`;

// ✅ delete this code!
const ButtonLink = styled.a`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: cyan;
  background-color: black;
  border: 2px solid cyan;
  transition: all 0.2s ease;
  line-height: 1;

  :hover,
  :focus {
    outline: none;
    color: black;
    background-color: cyan;
    border: 2px solid black;
  }
`;

export default function NavBar() {
  // ✅ update the ButtonLink components to use the Button component instead, with the "as" prop
  // they should still also have the href prop (since we want them to be links)
  return (
    <Wrapper>
      <ButtonLink href="#home">Home</ButtonLink>
      <ButtonLink href="#login">Login</ButtonLink>
      <ButtonLink href="#signup">Signup</ButtonLink>
      <Button>Logout</Button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 1rem;
  background-color: darkgray;
`;
