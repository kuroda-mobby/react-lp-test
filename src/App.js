import styled from "styled-components";

function App() {
  return (
    <LApp>
      <CCard>
        <CIner>
          <img src="https://placehold.jp/300x200.png" class="img" />
          <div class="description">
            <CCardName>コンテンツ１</CCardName>
            <CCardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </CCardText>
          </div>
        </CIner>
      </CCard>
      <CCard>
        <CIner>
          <img src="https://placehold.jp/300x200.png" class="img" />
          <div class="description">
            <CCardName>コンテンツ２</CCardName>
            <CCardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </CCardText>
          </div>
        </CIner>
      </CCard>
      <CCard>
        <CIner>
          <img src="https://placehold.jp/300x200.png" class="img" />
          <div class="description">
            <CCardName>コンテンツ３</CCardName>
            <CCardText>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </CCardText>
          </div>
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
const CImage = styled.img`

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