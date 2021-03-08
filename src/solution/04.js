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

export default function NavBar() {
  return (
    <Wrapper>
      <Button as="a" href="#home">
        Home
      </Button>
      <Button as="a" href="#login">
        Login
      </Button>
      <Button as="a" href="#signup">
        Signup
      </Button>
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
