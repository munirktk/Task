import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { fontFamily } from "../global";

export const FavComp = (props) => {
    const { image, title } = props
    return (
        <View style={styles.mainView}>
            <View style={styles.innerView}>
                <View style={styles.imageVIew}>
                    <Image style={styles.image} source={image} />
                </View>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: responsiveWidth(42),
        marginRight: responsiveWidth(5),
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(1)

    },
    image: {
        width: responsiveWidth(15),
        height: responsiveHeight(10),
        resizeMode: "contain"
    },
    imageVIew: {
        width: responsiveWidth(40),
        height: responsiveWidth(22),
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(3)
    },
    innerView: {
        alignItems: "center"
    },
    titleText: {
        fontFamily: fontFamily.appTextSemiBold,
        color: "white",
        fontSize: responsiveFontSize(1.8),
        marginTop: responsiveHeight(2)
    }
})