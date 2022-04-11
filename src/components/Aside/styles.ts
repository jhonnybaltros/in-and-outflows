import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Aside;

  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;

  border-right: 1px solid ${(props) => props.theme.colors.black};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`;

export const LogoContainer = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.tertiary};
  padding-top: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 25px;
    margin-right: 7px;
  }
`;

export const Title = styled.h3`
  margin-left: 10px;
`;
