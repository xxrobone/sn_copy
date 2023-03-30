'use client'
import React from 'react'
import styled from 'styled-components'
import { HiArrowLongRight } from 'react-icons/hi2'

const ButtonComponent = styled.button`
position: relative;
display: flex;
align-items: center;
justify-content: center;
text-align: left;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
user-select: none;
width: 19.5rem;
padding: 2rem;
height: 0;
font-family: 'Inter', sans-serif;
font-weight: 600;
border: 1px solid transparent;
background-color: ${props => 
  props.variant === 'light' 
  ? '#ffffff' 
  : props.variant === 'dark' 
  ? '#000000' 
  : props.variant === 'ängDark' 
  ? '#A89D55' 
  : props.variant === 'vikLight' 
  ? '#657B9F' 
  : props.variant === 'vikDark' 
  ? '#455B81' 
  : props.variant === 'jordLight' 
  ? '#B87F45' 
  : props.variant === 'jordDark' 
  ? '#985A1C' 
  : props.variant === 'skogLight' 
  ? '#9EB45A' 
  : props.variant === 'info' 
  ? '#0dcaf0' 
  : props.variant === 'ängLight' 
  ? '#CBC497' 
  : props.variant === 'skogDark' 
  ? '#7B932E' 
  : '#f8f9fa'};
color: ${props => 
  props.variant === 'light' 
  ? '#212529' 
  : props.variant === 'dark' 
  ? '#ffffff' 
  : props.variant === 'ängDark' 
  ? '#000000' 
  : props.variant === 'vikLight' 
  ? '#ffffff' 
  : props.variant === 'vikDark' 
  ? '#ffffff' 
  : props.variant === 'jordLight' 
  ? '#ffffff' 
  : props.variant === 'jordDark' 
  ? '#ffffff' 
  : props.variant === 'skogLight' 
  ? '#ffffff' 
  : props.variant === 'info' 
  ? '#ffffff' 
  : props.variant === 'ängLight' 
  ? '#000000' 
  : props.variant === 'skogDark' 
  ? '#ffffff' 
  : '#f8f9fa'};
`

export default function Button({type, variant, className, id, onClick, size, children}) {
  return ( 
    <ButtonComponent 
    type={type ? type : 'button'} 
    variant={variant} 
    className={className ? `btnComponent ${className}` : 'btnComponent'}
    id={id} 
    onClick={onClick} 
    size={size}
    >
      {children}
      <HiArrowLongRight 
        size={27}
        style={{
          marginLeft: '154px'
        }}
      />
    </ButtonComponent>
  )
}