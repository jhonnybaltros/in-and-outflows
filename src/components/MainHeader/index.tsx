import React, { useMemo } from 'react';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {
  const activeEmoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Olá, {activeEmoji}</Welcome>
        <UserName>Jhonny Baltros</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
