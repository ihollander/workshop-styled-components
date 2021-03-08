import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButton = styled(Button)`
  width: 200px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
`;

export default function App() {
  return <StyledButton>I'm a StyledButton</StyledButton>;
}
