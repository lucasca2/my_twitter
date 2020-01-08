import React, { useEffect } from 'react';
import AsyncStorage from "@react-native-community/async-storage";

// Navigator
import AppNavigator from '/navigators/AppNavigator';


// Services
import userService from '/services/user';

export default function App() {
  useEffect(() => {
    async function fetchUser() {
      const user = await userService.getData();

      if(user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user));
      }
    }

    fetchUser();
  }, []);

  return (
    <AppNavigator />
  )
}
