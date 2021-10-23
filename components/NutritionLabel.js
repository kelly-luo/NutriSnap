import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SIZES } from '../constants'

export const NutritionLabel = (props) => {
    const [text, setText] = useState();
    const [colour, setColor] = useState();

    useEffect(() => {
        setText(props.labelText)
        setColor(props.colour)
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
        height: '35%',
        width: '35%',
        borderRadius: 20,
        backgroundColor: 'bisque',
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8
    },
});

