import React, { useState } from "react"
import { View } from "react-native"
import { Text, TextInput, Button, RadioButton } from "react-native-paper"
import { DatePickerInput } from 'react-native-paper-dates';

import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../slices/usersSlice";

export default function SignupScreen() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState(undefined)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = React.useState('male');
    const [error, setError] = useState(false);

    const dispatch = useDispatch()

    const users = useSelector(state => state.users.value)
    console.log(users)

    const onSubmit = () => {
        if (name && dob && email && password && gender) {
            setError(false)
            const user = {
                name,
                dob,
                email,
                password,
                gender
            }
            dispatch(addUser(user))
            setEmail("")
            setName("")
            setDob(undefined)
            setPassword("")
        } else {
            setError("All fields are required.")
        }
    }

    return (
        <View style={{ justifyContent: 'center', gap: 10, margin: '5%' }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', marginHorizontal: '5%' }}>Create New Account</Text>
            {error &&
                <Text>{error}</Text>
            }
            <TextInput
                mode="outlined"
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text style={{ fontSize: 16, alignSelf: 'flex-start', marginTop: '5%' }}>Select Gender</Text>
            <View style={{ alignSelf: 'flex-start', marginHorizontal: '5%', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "flex-start", marginRight: '5%' }}>
                    <Text>Male</Text>
                    <RadioButton
                        value="male"
                        status={gender === 'male' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('male')}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "flex-start" }}>
                    <Text>Female</Text>
                    <RadioButton
                        value="female"
                        status={gender === 'female' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('female')}
                    />
                </View>
            </View>
            <DatePickerInput
                locale="en"
                label="Birthdate"
                mode="outlined"
                value={dob}
                onChange={(d) => setDob(d)}
                inputMode="start"
                style={{ width: '90%' }}
            />
            <TextInput
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                mode="outlined"
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button style={{ marginTop: 20 }} mode="contained" onPress={onSubmit}>
                Sign Up
            </Button>
        </View>
    );
}