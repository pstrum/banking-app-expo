import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

interface overview {
  name: string;
  balance: number;
}

// Using something like Styled-Components allows me to set global styles
// and have nice, reusable control over the styles within components.

const StyledView = styled(View)`
  margin-bottom: 2rem;
`;

const H1 = styled(Text)`
  font-size: 2rem;
  color: ${(props) => props.theme.color.base.default};
`;

const Balance = styled(Text)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.base.default};
`;

export const AccountOverview = ({ name, balance }: overview) => {
  return (
    <StyledView>
      <H1>{name}</H1>
      <Balance>Balance: ${balance?.toFixed(2)}</Balance>
    </StyledView>
  );
};
