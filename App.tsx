import React from 'react';
import { Button, StyleSheet, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect, Provider } from 'react-redux';
import store from './redux/store';

// import { UserService } from './services/user.service';
import Greeting from './components/greeting';
import Transactions from './components/transactions';
import user from './redux/reducers/user';

function AccountScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Greeting />
      <Transactions />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text>Settings</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTitleStyle: {
                color: '#fff',
              },
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Settings')}
                  title="Settings"
                  color="#000"
                />
              ),
            })}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingLeft: 24,
    backgroundColor: '#000',
  },
});
