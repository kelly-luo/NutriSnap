import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { FoodCard } from '../components/FoodCard';
import { images } from '../constants'

const { width } = Dimensions.get('window');

export default DiaryScreen = ({ navigation }) => {
  const foodDiaryData = [
    {
      id: 1,
      name: "Coffee",
      timeConsumed: "1:12pm",
      photo: images.coffee,
    },
    {
      id: 2,
      name: "Pizza",
      timeConsumed: "12:48pm",
      photo: images.pizza,
    },
    {
      id: 3,
      name: "Apple",
      timeConsumed: "9:00am",
      photo: images.apple,
    },
  ]

  return (
    <View>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        <FoodCard image={images.coffee} />
        <FoodCard image={images.pizza} />
        <FoodCard image={images.apple} />
      </ScrollView >
    </View>
  );
}

