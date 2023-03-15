import React, { useEffect } from "react";
import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { appImages } from "../../global/assets";
import { colors } from "../../global/colors";
import { fontFamily } from "../../global/fonts";

const Splash = ({ navigation }) => {


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnBoarding')
        }, 3000);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                translucent={true}
            />
            <View style={styles.wrapper}>
                <Image source={appImages.logo} style={styles.image} />
                <View style={styles.textView}>
                    <Text style={styles.logoText}>{'MeNuu'}</Text>
                    <Text style={styles.slogan}>{'Menu.Nutrition.yoU'}</Text>
                </View>
            </View>
        </View>
    )
}

export default Splash
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    wrapper: {
        width: responsiveWidth(90),
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    image: {
        width: responsiveWidth(25),
        height: responsiveWidth(25),
        resizeMode: "contain"
    },
    textView: {
        alignItems: "center",
    },
    logoText: {
        fontSize: responsiveFontSize(3.5),
        color: 'white',
        fontWeight: '500',
        marginTop: -5
    },
    slogan: {
        color: 'white',
        fontSize: responsiveFontSize(1),
        fontFamily: fontFamily.appMenloRegular
    }
})