import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import { useAppKitAccount } from '@reown/appkit-ethers-react-native';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const { isConnected } = useAppKitAccount();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home';
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2F5233',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            display: !isConnected ? 'none' : 'flex',
          },
        })}
      >
        {!isConnected ? (
          <Tab.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Tab.Screen name="Home" component={DashboardScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
