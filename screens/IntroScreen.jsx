import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 2
    },
    image: {
        flex: 1,
        position: 'absolute'
    },
    title: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 80,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '90%',
    },
    container: {
        height: 200,
        marginTop: '150%',
    }

});

const slides = [
    {
        key: 1,
        title: ' it\'s easy to find a soulmate nearby and around you',
        image: require('../assets/img/Rectangle1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Now Easier to Make Online Payments',
        image: require('../assets/img/Rectangle4.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Everything You Can Do in the App',
        image: require('../assets/img/Rectangle2.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 4,
        title: 'You Can Advertise All Your Products Here!',
        image: require('../assets/img/Rectangle3.png'),
        backgroundColor: '#22bcb5',
    }
];

export default function IntroScreen() {
    const [showRealApp, setShowRealApp] = useState(false)

    const navigation = useNavigation()

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={item.image} />
                <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']} style={styles.container}>
                    <Text style={styles.title}>{item.title}</Text>
                </LinearGradient>
            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        setShowRealApp(true)
        navigation.navigate("Home")
    }
    const _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="arrow-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    const _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    return (
        <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            onDone={_onDone}
        />
    );
}