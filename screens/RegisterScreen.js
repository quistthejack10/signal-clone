import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Text } from 'react-native'
import { Input } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",

        });
    }, [navigation])

    const signUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                imageURL: imageUrl || "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",

            })
        })
        .catch((error) => alert(error.message));
    };


    return (
        <KeyboardAvoidingView beharvior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create an Account</Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name"
                    autoFocus
                    type="string"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    secureTextEntry
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input 
                    placeholder="Profile Picture URL"
                    type="text"
                    value={imageUrl}
                    onChangeText={(e) => setImageUrl(e)}
                    onSubmitEditing={signUp}
                />

            </View>
            <Button raised style={styles.button} title="Sign Up" onPress={signUp} />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>

                
                    
            
        
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
