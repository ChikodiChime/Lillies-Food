import React from 'react'
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Btn = styled.button`
  background-color: ${COLORS.green};
  color: ${COLORS.Nude};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 18px 0;

  &:hover{
    cursor: pointer;
  }

`

const Button = ({text}) => {
  return (
    <Btn>
      {text}
    </Btn>
  )
}

export default Button