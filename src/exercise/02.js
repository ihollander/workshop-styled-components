// ✅ uncomment the line below ⬇️
import styled from "styled-components";
import { Button } from "@material-ui/core";

// ✅ create a StyledButton component by styling the Button from material-ui
const StyledButton = styled(Button)`
  &&& {
    width: 200px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    background: red;
  }
`;

// id: 100
// class: 10
// element: 1

export default function App() {
  // ✅ replace the Button with your StyledButton
  return <StyledButton>I'm a Button</StyledButton>;
}
