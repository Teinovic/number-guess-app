import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function startGameScreen({children, ...restProps}) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    
})