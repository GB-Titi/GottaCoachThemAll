import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../components/Search';
import Connexion from '../components/Connexion';
import Inscription from '../components/Inscription';
import Accueil from '../components/Accueil';
import * as React from 'react';

function HomeScreen(){
    return(
        <Accueil></Accueil>
    )
}

function CoachingsScreen(){
    return(
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Coachings</Text>
        </View>
    )
}

function TutosScreen(){
    return(
      <Search></Search>
    )
}

function EsportScreen(){
    return(
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Esport</Text>
        </View>
    )
}

const Stack = createStackNavigator();

function ConnexionScreen(){
  return(
      <Stack.Navigator>
        <Stack.Screen
          name="Connexion"
          component={Connexion}
        />
      </Stack.Navigator>
  )
}
  
const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator style={styles.menu}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              }

              if (route.name === 'Coachings') {
                iconName = focused
                  ? 'body'
                  : 'body-outline';
              }

              if (route.name === 'Tutos') {
                iconName = focused
                  ? 'videocam'
                  : 'videocam-outline';
              }

              if (route.name === 'Esport') {
                iconName = focused
                  ? 'trophy'
                  : 'trophy-outline';
              }

              if (route.name === 'Connexion') {
                iconName = focused
                  ? 'apps'
                  : 'apps-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#0eb9c7',
            inactiveTintColor: 'gray',
            inactiveBackgroundColor: '#111111',
            activeBackgroundColor: '#111111',
            tabBarPosition: 'bottom',
            style : {
                height: 80,
                bottom: 0,
                padding: 0,
                backgroundColor: '#111111',
            }
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Coachings" component={CoachingsScreen} />
          <Tab.Screen name="Tutos" component={TutosScreen} />
          <Tab.Screen name="Esport" component={EsportScreen} />
          <Tab.Screen name="Connexion" component={ConnexionScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )}

  const styles = StyleSheet.create({
    menu: {
        height: 80,
        backgroundColor: '#111111',
        borderTopColor: '#666168',
        borderTopWidth: 1
    },
  });
  