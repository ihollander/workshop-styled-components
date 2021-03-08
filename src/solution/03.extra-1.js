import styled from "styled-components";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 1rem;
  padding: 1rem;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  box-shadow: 2px 2px 4px black;
`;

const ListItem = styled.li`
  padding: 0.25rem 1rem;
  background: ${({ number }) => {
    if (number % 3 === 0 && number % 5 === 0) return "blueviolet";
    if (number % 3 === 0) return "blue";
    if (number % 5 === 0) return "violet";
    return "white";
  }};
`;

const items = [];
for (let i = 1; i < 100; i++) {
  items.push(i);
}

export default function List() {
  return (
    <UnorderedList>
      {items.map(item => (
        <ListItem key={item} number={item}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
