import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FoodCard } from '../components/FoodCard';
import { images, SIZES } from '../constants'

export default DiaryScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: SIZES.h2, margin: 20 }}>Today</Text>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={SIZES.width - 60}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        <FoodCard image={images.coffee} timeConsumed={"1:12pm"} navigation={navigation} />
        <FoodCard image={images.pizza} timeConsumed={"12:48pm"} navigation={navigation} />
        <FoodCard image={images.apple} timeConsumed={"9:00am"} navigation={navigation} />
      </ScrollView >
    </View>
  );
}