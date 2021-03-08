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

// ✅ use the isEven prop in this component to change the background color for even rows!
const ListItem = styled.li`
  padding: 0.25rem 1rem;
  background: aliceblue;
`;

const items = ["Check", "Out", "This", "Great", "List"];

export default function List() {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={item} isEven={(index + 1) % 2 === 0}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
