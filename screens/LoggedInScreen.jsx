import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { useNavigation } from "@react-navigation/native";

import { Button } from 'react-native-paper';

import { useSelector } from "react-redux";

export default function LoggedInScreen({ route, navigation }) {

    const { user } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Text>User Logged In as {user.name}</Text>

        </View>
    );
}