import React from 'react';
import NavTab from './NavTab';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
`;


function Nav(){

  return (
    <StyledNav>
      <NavTab name="Move" />
      <NavTab name="Scoreboard" />
      <NavTab name="Episodes" />
      <NavTab name="Rules" />
      <NavTab name="Admin" />
    </StyledNav>
  );
}

export default Nav;
