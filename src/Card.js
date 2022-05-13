import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  const {data} = props;
  return(
    <LApp>
      {data.map((item, index) => {
        return(
          <CCard key={index}>
            <CIner>
              <CImg src={item.imagePath} alt={item.title} className="img" />
              <CDescription>
                <CCardName>{item.title}</CCardName>
                <CCardText>
                  {item.description}
                </CCardText>
              </CDescription>
            </CIner>
          </CCard>
        );
      })}
    </LApp>
  );
};

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