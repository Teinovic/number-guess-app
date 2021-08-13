import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

export default function StartGameScreen({children, ...restProps}) {
    return (
        <View style={style.screen}>
            <Text style={style.title}>Start a new game!</Text>
            <View style={style.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={style.buttonContainer}>
                    <Button title='reset' />
                    <Button title='confirm' />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%'
    }
})