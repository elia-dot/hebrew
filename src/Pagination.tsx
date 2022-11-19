import React from 'react';
import styled from 'styled-components';

interface Props {
  currentPage: number;
}

const StyleNumber = styled.div<{ current: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${({ current }) => (current ? 'blue' : 'white')};
  color: ${({ current }) => (current ? 'white' : 'blue')};
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
`;

const Pagination = (props: Props) => {
  return (
    <Container>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <StyleNumber key={i} current={props.currentPage === i}>
            {i + 1}
          </StyleNumber>
        ))}
    </Container>
  );
};

export default Pagination;
