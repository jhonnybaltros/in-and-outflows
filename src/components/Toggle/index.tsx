import React from 'react';

import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={true}
      checkedIcon={true}
      onChange={() => console.log('changed')}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;
