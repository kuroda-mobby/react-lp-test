import styled from "styled-components";

function App() {
  return (
    <LApp>
      <CCard>
        <CIner>
          <CImg src="https://placehold.jp/300x200.png" alt="コンテンツ1" class="img" />
          <CDescription>
            <CCardName>コンテンツ１</CCardName>
            <CCardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </CCardText>
          </CDescription>
        </CIner>
      </CCard>
      <CCard>
        <CIner>
          <CImg src="https://placehold.jp/300x200.png" alt="コンテンツ2" class="img" />
          <CDescription>
            <CCardName>コンテンツ２</CCardName>
            <CCardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </CCardText>
          </CDescription>
        </CIner>
      </CCard>
      <CCard>
        <CIner>
          <CImg src="https://placehold.jp/300x200.png" alt="コンテンツ3" class="img" />
          <CDescription>
            <CCardName>コンテンツ３</CCardName>
            <CCardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </CCardText>
          </CDescription>
        </CIner>
      </CCard>
      
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
const CCard = styled.div`
  border: 2px solid #333;
  border-radius: 5px;
  width: 48%;
  margin: 20px 0;
`;
const CIner = styled.div`
  padding: 20px;
`;
const CImg = styled.img`
  max-width: 300px;
  width: 100%;
`;
const CDescription = styled.div`

`;
const CCardName = styled.h1`
  text-decoration: underline;
`;
const CCardText = styled.p`
  font-style: italic;
  text-align: left;
`;