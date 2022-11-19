import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled('div')`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  height: 60vh;
`;

const Container = (props: { children: React.ReactNode }) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
