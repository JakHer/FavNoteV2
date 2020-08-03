import React from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #111;
  background: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.4s ease
      background,
    0.4s ease color;

  &:hover {
    background: #728;
    color: #fff;
  }
`;

const App = () => (
  <>
    <h1>Hello Kuba!</h1>
    <Button
      onClick={() =>
        console.log(
          'Clicked',
        )
      }
    >
      Siema
    </Button>
  </>
);

export default App;
