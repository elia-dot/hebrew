import React from 'react';
import styled from 'styled-components';
import CompletedContainer from '../components/CompletedContainer';

const Row = styled.div<{index: number}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  border-bottom: ${(props) => (props.index !== 3 ? 'none' : '1px solid black')};
`;

const Bold = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

interface Props {
  finalGrades: { step: string; grade: number }[];
}

const Final = (props: Props) => {
  return (
    <CompletedContainer>
      {props.finalGrades.map((item, i) => (
        <Row key={i} index = {i}>
          <Bold>{item.step}:</Bold>
          <Text>{item.grade}%</Text>
        </Row>
      ))}
    </CompletedContainer>
  );
};

export default Final;
