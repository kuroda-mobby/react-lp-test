import styled from "styled-components";
import { Card } from "./Card";

function App() {
  return (
    <LApp>
      <Card />
      
    </LApp>
    
  );
}

export default App;


const LApp = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
`;
