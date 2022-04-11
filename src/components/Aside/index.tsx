import React from 'react';

import {
  Container,
  Header,
  LogoContainer,
  Title,
  MenuContainer,
  MenuItemLink,
} from './styles';

import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from 'react-icons/md';

import Logo from '../../assets/logo.svg';

const Aside: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <LogoContainer src={Logo} alt="In and Outflows" />
          <Title>My Wallet</Title>
        </Header>
        <MenuContainer>
          <MenuItemLink>
            <MdDashboard />
            Dashboard
          </MenuItemLink>
          <MenuItemLink>
            <MdArrowUpward />
            Inflows
          </MenuItemLink>
          <MenuItemLink>
            <MdArrowDownward />
            Outlows
          </MenuItemLink>
          <MenuItemLink>
            <MdExitToApp />
            Logout
          </MenuItemLink>
        </MenuContainer>
      </Container>
    </>
  );
};

export default Aside;
