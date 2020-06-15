import React from 'react';

import styled from 'styled-components';

const TimerHeader = () => (
  <HeaderContainer>
    <P>You can do it!</P>
  </HeaderContainer>
);

export default TimerHeader;

const HeaderContainer = styled.div`
  margin-top: 1.5%;
`;

const P = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: 500; 
`;