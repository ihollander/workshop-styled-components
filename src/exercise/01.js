import { useState } from "react";
// ✅ remember to import the styled-components library!
import styled from "styled-components";

// ✅ create two components using styled-components: a div and a button
// ✅ use the inline styles from below to create the CSS string for your components
// 📃 https://styled-components.com/docs/basics#getting-started
const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  place-content: center;
  background: skyblue;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  background: dodgerblue;
  padding: 1rem;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.4s ease;

  :hover {
    background: palegreen;
  }
`;

export default function App() {
  const [count, setCount] = useState(0);

  // ✅ remove the style prop from the div and the button
  // ✅ replace the JSX elements with your styled components
  return (
    <Wrapper>
      <Button onClick={() => setCount(count + 1)}>Clicks: {count}</Button>
    </Wrapper>
  );
}
