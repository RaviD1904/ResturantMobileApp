import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairing from './screens/OrderPrepairing';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />
        <Stack.Screen name="Delivery" options={{presentation:"fullScreenModal"}} component={DeliveryScreen} />
        <Stack.Screen name="OrderPrepairing" options={{presentation:"fullScreenModal"}} component={OrderPrepairing} />
        <Stack.Screen name="Cart" options={{presentation:"modal"}} component={CartScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation