import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import listContact from './src/views/listContact';
import addContact from './src/views/addContacts';
import updateContacts from './src/views/updateContact';
import { configureStore } from './src/store';


const Stack = createStackNavigator();

const store = configureStore();
export default function App() {
  return (

    <NavigationContainer>
      <StoreProvider store={store}>
        <Stack.Navigator initialRouteName='contacts'>
          <Stack.Screen name="add" component={addContact} options={{ title: 'Add Contact' }} />
          <Stack.Screen name="update" component={updateContacts} options={{ title: 'Update Contact' }} />
          <Stack.Screen name="contacts" component={listContact} options={{ title: 'Contacts' }} />

        </Stack.Navigator>
      </StoreProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
