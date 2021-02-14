import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChatScreen = ({ navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackStyleVisible: false,
            headerTitleAlign: "Left",
        });
    }, [navigation]);


    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})
