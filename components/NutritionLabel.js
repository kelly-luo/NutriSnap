import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIZES } from '../constants'

export const NutritionLabel = (props) => {
    const [text, setText] = useState();

    useEffect(() => {
        setText(props.labelText)
    });

    return (
        <View>
            <View style={styles.view}>
                <Text>{text}</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    view: {
        width: SIZES.width - 80,
        margin: 10,
        height: '40%',
        width: '20%',
        borderRadius: 20,
        backgroundColor: "azure",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8
    },
});

