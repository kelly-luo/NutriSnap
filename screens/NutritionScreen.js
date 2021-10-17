import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import PieChart from 'react-native-pie-chart'

import { SIZES } from '../constants'

const NutritionScreen = ({ route, navigation }) => {
  const [timeConsumed, setTimeConsumed] = useState();
  const [foodImage, setFoodImage] = useState();

  useEffect(() => {
    let { timeConsumed, foodImage } = route.params;

    setTimeConsumed(timeConsumed)
    setFoodImage(foodImage)
  });

  const widthAndHeight = 250
  const series = [123, 321, 123, 789, 537]
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']

  return (
    <ScrollView>
      <View style={{ height: SIZES.height * 0.35 }}>
        <Image
          source={foodImage}
          resizeMode="cover"
          style={{
            width: SIZES.width,
            height: "100%"
          }}
        />
      </View>

      {/* Pie Chart Information */}
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Doughnut</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>

        {/* <Text style={{ fontSize: SIZES.h4, textAlign: 'center' }}>{timeConsumed}</Text> */}

        {/* Nutrition Information */}
        <View style={styles.item}>
          <Text> HIIII </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', height: 500 },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
})

export default NutritionScreen;
