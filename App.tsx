import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/global-styles';
import { theme } from './theme/theme';

import AccountScreen from './screens/account';
import SettingsScreen from './screens/settings';

const store = configureStore();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
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
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  );
}
