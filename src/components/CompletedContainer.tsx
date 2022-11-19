import React from 'react';
import styled from 'styled-components';

const StyledCompletedContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
`;

const CompletedContainer = (props: { children: React.ReactNode }) => {
  return <StyledCompletedContainer>{props.children}</StyledCompletedContainer>;
};

export default CompletedContainer;
