import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { AccountViewModel } from '../../models/view/account-view-model';

interface transaction {
  name: string;
  amount: number;
}

function Transaction({ name, amount }: transaction) {
  return (
    <View style={styles.transaction}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
}

export default function Transactions() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[{ name: 'peter', amount: 23.5 }]}
        renderItem={({ item }) => (
          <Transaction name={item.name} amount={item.amount} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  transaction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  name: {
    color: '#fff',
  },
  amount: {
    color: '#fff',
  },
});
