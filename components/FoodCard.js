import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { SIZES } from '../constants'

export const FoodCard = (props) => {
    return (
        <View>
            <View style={styles.view}>
                <TouchableOpacity >
                    <Image
                        source={props.image}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: SIZES.h4, textAlign: 'center' }}>{props.timeConsumed}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    view: {
        width: SIZES.width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
    },
});

