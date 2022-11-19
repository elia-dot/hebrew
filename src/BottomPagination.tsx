import React from 'react';
import styled from 'styled-components';

interface Props {
  currentAnswer: number;
}

const StyleNumber = styled.div<{ filled: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ filled }) => (filled ? 'blue' : 'white')};
  color: ${({ filled }) => (filled ? 'white' : 'blue')};
  border-radius: 50%;
  display: grid;
  font-weight: bold;
  place-content: center;
  border: 1px solid black;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  direction: ltr;
  padding: 10px 0;
  margin-top: auto;
`;

const Pagination = (props: Props) => {
  return (
    <Container>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <StyleNumber key={i} filled={props.currentAnswer >= i}>
            
          </StyleNumber>
        ))}
    </Container>
  );
};

export default Pagination;
