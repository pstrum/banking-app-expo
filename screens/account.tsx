import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { AccountOverview } from '../components/account-overview';
import { Transactions } from '../components/transactions';
import { TopSpending } from '../components/top-spending';
import { connect } from 'react-redux';
import { fetchTransactionsIfNeeded } from '../redux/actions';
import styled from 'styled-components';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  padding-top: 1rem;
  background-color: ${(props) => props.theme.color.background.primary};
`;

const AccountScreen = (props: any) => {
  useEffect(() => {
    props.dispatch(fetchTransactionsIfNeeded(props.selectedAccount));
  }, []);
  return (
    <StyledSafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <AccountOverview name={props.name} balance={props.balance} />
        <TopSpending categories={props.topSpending} />
        <Transactions items={props.transactions} />
      </ScrollView>
    </StyledSafeAreaView>
  );
};

function mapStateToProps(state: {
  selectedAccount: any;
  transactionsByAccount: any;
}) {
  const { selectedAccount, transactionsByAccount } = state;
  const {
    isFetching,
    lastUpdated,
    name,
    balance,
    items: transactions,
    topSpending,
  } = transactionsByAccount[selectedAccount] || {
    isFetching: true,
    transactions: [],
    topSpending: [],
  };

  return {
    selectedAccount,
    topSpending,
    transactions,
    name,
    balance,
    isFetching,
    lastUpdated,
  };
}

export default connect(mapStateToProps)(AccountScreen);
