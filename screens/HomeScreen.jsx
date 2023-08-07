import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { useNavigation } from "@react-navigation/native";

import { Button } from 'react-native-paper';

import { useSelector } from "react-redux";

export default function HomeScreen() {

    const navigation = useNavigation();

    const users = useSelector(state => state.users.value)

    console.log(users);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Text>User Not Logged In</Text>
            <Button style={{ width: '90%' }} mode="contained" onPress={() => navigation.navigate("Login")}>
                Login
            </Button>
            <Button style={{ width: '90%' }} mode="contained" onPress={() => navigation.navigate("Signup")}>
                Sign Up
            </Button>
        </View>
    );
}