import React, { useState } from "react"
import { View } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"

import { useSelector, useDispatch } from "react-redux"

import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState(false)

    const users = useSelector(state => state.users.value)

    const navigation = useNavigation()

    const onSubmit = () => {
        users.map(user => {
            if (user.email == email && user.password == password) {
                navigation.navigate("LoggedIn", { user })
            } else {
                setError("wrong email or password!")
            }
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', marginHorizontal: '5%' }}>Welcome Back!</Text>
            {error &&
                <Text style={{ fontSize: 16, alignSelf: 'center', marginHorizontal: '5%' }}>{error}</Text>
            }
            <TextInput
                style={{ width: '90%' }}
                label="Email"
                mode="outlined"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Password"
                style={{ width: '90%' }}
                mode="outlined"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button
                style={{ width: '90%' }} mode="contained" onPress={onSubmit}>
                Login
            </Button>
        </View>
    );
}