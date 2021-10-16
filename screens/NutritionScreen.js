import React, { useState, useEffect } from 'react';
import { View, Text, Image } from "react-native";
import { SIZES } from '../constants'

const NutritionScreen = ({ route, navigation }) => {
  const [timeConsumed, setTimeConsumed] = useState();
  const [foodImage, setFoodImage] = useState();

  useEffect(() => {
    let { timeConsumed, foodImage } = route.params;

    setTimeConsumed(timeConsumed)
    setFoodImage(foodImage)
  });

  return (
    <View style={{ height: SIZES.height * 0.35 }}>
      <Image
        source={foodImage}
        resizeMode="cover"
        style={{
          width: SIZES.width,
          height: "100%"
        }}
      />
      {/* <Text style={{ fontSize: SIZES.h4, textAlign: 'center' }}>{timeConsumed}</Text> */}
    </View>
  );
};

export default NutritionScreen;
