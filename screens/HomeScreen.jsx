import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import { Text, Appbar, Divider } from "react-native-paper"
import { useNavigation } from "@react-navigation/native";

import { Button } from 'react-native-paper';

import { useSelector } from "react-redux";

export default function HomeScreen() {

    const navigation = useNavigation();

    const users = useSelector(state => state.users.value)

    console.log(users);

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(0,0,0,0)' }}>
                <Appbar.BackAction onPress={() => { }} />
            </Appbar.Header>
            <View style={{ flex: 1, alignItems: 'center', gap: 10 }}>
                <Image source={require('../assets/img/Group1.png')}>

                </Image>
                <Text style={{ fontSize: 32, fontWeight: '700' }}>Let's get you in</Text>
                <View style={{width: '90%', flexDirection: 'column', gap: 5}}>
                    <Button icon="facebook" mode="outlined" onPress={() => console.log('Pressed')}>
                        Continue with Facebook
                    </Button>
                    <Button icon="google" mode="outlined" onPress={() => console.log('Pressed')}>
                        Continue with Google
                    </Button>
                    <Button icon="apple" mode="outlined" onPress={() => console.log('Pressed')}>
                        Continue with Apple
                    </Button>
                </View>
                <Text style={{margin: 50}}>Or</Text>
                <Button style={{ width: '90%' }} mode="contained" onPress={() => navigation.navigate("Login")}>
                    Sign in with password
                </Button>
                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text>Sign up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}