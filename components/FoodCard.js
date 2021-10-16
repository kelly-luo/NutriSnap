import React, { Component, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const FoodCard = (props) => {
    return (
        <View style={styles.view}>
            <Image
                source={props.image}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 30
                }}
            />
            <Text>{props.time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    view: {
        marginTop: 100,
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
    view2: {
        marginTop: 100,
        backgroundColor: 'red',
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
});

