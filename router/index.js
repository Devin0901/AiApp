import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';
import Camera from '../pages/Camera';
import History from '../pages/History';
import Recipe from '../pages/Recipe';
import Account from '../pages/Account';
import Daftar from '../pages/Daftar';
import Masuk from '../pages/Masuk';
import RecipeDiet from '../pages/RecipeDiet'
import RecipeDetailHealty from '../pages/RecipeDetailHealty'
import RecipeHowToHealty from '../pages/RecipeHowToHealty'
import RecipeDetailDiet from '../pages/RecipeDetailDiet'
import RecipeHowToDiet from '../pages/RecipeHowToDiet'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RecipeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Recipe"
          component={Recipe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeDiet"
          component={RecipeDiet}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="RecipeDetailHealty"
          component={RecipeDetailHealty}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeHowToHealty"
          component={RecipeHowToHealty}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="RecipeDetailDiet"
          component={RecipeDetailDiet}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="RecipeHowToDiet"
          component={RecipeHowToDiet}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    );
  };

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Camera" component={Camera} options = {{headerShown: false}}/>
            <Tab.Screen name="History" component={History} options = {{headerShown: false}}/>
            <Tab.Screen name="Recipe" component={RecipeStack} options = {{headerShown: false}}/>
            <Tab.Screen name="Account" component={Account} options = {{headerShown: false}}/>
        </Tab.Navigator>
    );
}


const Router = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options = {{headerShown: false}}/>
        <Stack.Screen name="Masuk" component={Masuk} options={{headerShown:false}}/>
        <Stack.Screen name="Daftar" component={Daftar} options={{headerShown:false}}/> 
        <Stack.Screen name="RecipeDiet" component={RecipeDiet} options={{headerShown:false}}/>
        <Stack.Screen name="RecipeDetailHealty" component={RecipeDetailHealty} options={{headerShown:false}}/>  
        <Stack.Screen name="RecipeHowToHealty" component={RecipeHowToHealty} options={{headerShown:false}}/> 
        <Stack.Screen name="RecipeDetailDiet" component={RecipeDetailDiet} options={{headerShown:false}}/> 
        <Stack.Screen name="RecipeHowToDiet" component={RecipeHowToDiet} options={{headerShown:false}}/> 
    </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})