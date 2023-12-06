import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './loginScreen';
import TodoListScreen from './todoListScreen';
const Stack = createStackNavigator();
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  console.log(isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => (
              <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Todo"
            // component={TodoListScreen}
            options={{headerShown: false}}>
            {props => (
              <TodoListScreen
                {...props}
                onLogout={() => setIsLoggedIn(false)}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
