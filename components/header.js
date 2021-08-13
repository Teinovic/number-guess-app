import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default function Header({children, ...restProps}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
});