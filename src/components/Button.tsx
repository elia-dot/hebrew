import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  margin: 10px;
  padding: 10px 20px;
  font-size: 22px;
  background-color: blue;
  color: white;
  border-radius: 8px;
  border: none;
  outline: none;
`;

interface Props {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = (props:Props) => {
  return (
    <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
  )
}

export default Button