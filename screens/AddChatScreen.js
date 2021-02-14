import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Avatar } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState("");


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a New Chat",
            headerBackTitle: "Chats",
            headerTitle: () => ( 
            <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  rounded
                  source={{
                    uri:
                      messages[0]?.data.photoURL ||
                      "https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png",
                  }}
                />
                <Text style={styles.textStyle}>{route.params.chatName}</Text>
              </View>)

            
        });
        
    }, [navigation]);

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack();
        }).catch(error => alert(error));
    };
    return (
        <View style={styles.container}>
            <Input placeholder="Add a new chat"
            value={input}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={createChat}
            leftIcon={
                <Icon name="wechat" type="antdesign" size={24} color="black" />
            }
             />
             <Button title="Create New Chat" onPress={createChat} /> 
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
})
