import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import styled from 'styled-components';

// Ideally, I'm importing a "Category" model in a "Models" directory
interface category {
  category: string;
  amount: number;
}

// Using something like Styled-Components allows me to set global styles
// and have nice, reusable control over the styles within components.
const StyledSafeAreaView = styled(SafeAreaView)`
  margin-bottom: 2rem;
`;

const StyledText = styled(Text)`
  margin-right: 1rem;
  color: ${(props) => props.theme.color.base.default};
  text-transform: capitalize;
`;

const StyledCategory = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledH2 = styled.h2`
  font-size: 1.625rem;
  color: ${(props) => props.theme.color.base.default};
`;

const Category = ({ category, amount }: category) => {
  return (
    <StyledCategory>
      <StyledText>{category}</StyledText>

      {/* This logic could be done here, or after getting the data back via Promise */}
      <StyledText>${Math.abs(amount).toFixed(2)}</StyledText>
    </StyledCategory>
  );
};

export const TopSpending = ({ categories }: any) => {
  return (
    <StyledSafeAreaView>
      <StyledH2>Top Spending</StyledH2>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category category={item.category} amount={item.amount} />
        )}
      />
    </StyledSafeAreaView>
  );
};
