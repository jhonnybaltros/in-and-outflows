import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.light};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    offColor: theme.colors.info,
    onColor: theme.colors.warning,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
