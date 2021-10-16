import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import DiaryScreen from "../screens/DiaryScreen";
import NutritionScreen from "../screens/NutritionScreen";

const NutritionStack = createStackNavigator();

const NutritionStackScreen = () => {
  return (
    <NutritionStack.Navigator>
      <NutritionStack.Screen name="Diary"
        component={DiaryScreen} />
      <NutritionStack.Screen name="Nutrition" component={NutritionScreen}
        options={{
          tabBarLabel: "Diary",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={color}
              size={size}
            />
          )
        }} />
    </NutritionStack.Navigator>
  );
}

export default NutritionStackScreen;