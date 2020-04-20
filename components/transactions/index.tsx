import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { transaction } from '../../models/transaction';
import styled from 'styled-components';

const StyledText = styled(Text)`
  margin-right: 1rem;
  color: ${(props) => props.theme.color.base.default};
`;

const StyledTransaction = styled(View)`
  display: flex;
  flex-direction: row;
`;

const StyledAmount = styled(Text)`
  flex-grow: 1;
  color: ${(props) => props.theme.color.base.default};
  text-align: right;
`;

const StyledH2 = styled.h2`
  font-size: 1.625rem;
  color: ${(props) => props.theme.color.base.default};
`;

const Transaction = ({ category, date, amount }: transaction) => {
  // This logic could be done somewhere higher up. Typically I would put this
  // on a View Model, so maybe in the Action using Redux.
  function transformDate(date: number): string {
    return new Intl.DateTimeFormat('en-US').format(date);
  }

  return (
    <StyledTransaction>
      <StyledText>{transformDate(date)}</StyledText>
      <StyledText>{category}</StyledText>
      <StyledAmount>${amount.toFixed(2)}</StyledAmount>
    </StyledTransaction>
  );
};

export const Transactions = ({ items }: any) => {
  return (
    <SafeAreaView>
      <StyledH2>Transactions</StyledH2>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Transaction
            category={item.category}
            amount={item.amount}
            date={item.date}
          />
        )}
      />
    </SafeAreaView>
  );
};
