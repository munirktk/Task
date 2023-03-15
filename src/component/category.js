import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import { fontFamily, colors } from "../global";


export const CategoryComp = ({
    image,
    name,
    places,
    imagePress
}) => {
    return (
        <TouchableOpacity style={styles.mainView}
            onPress={imagePress}
        >
            <View style={styles.imageView}>
                <Image style={styles.image} source={image} />
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.places}>{places} places</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: responsiveWidth(18),
        height: responsiveWidth(18),
        resizeMode: 'contain'
    },
    imageView: {
        width: responsiveWidth(22),
        height: responsiveWidth(22),
        borderRadius: responsiveWidth(3),
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",

    },
    mainView: {
        marginRight: responsiveWidth(4),
        marginVertical: responsiveHeight(1),
        marginLeft: responsiveWidth(1),
        alignItems: "center"
    },
    name: {
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: responsiveFontSize(1.7),
        color: 'black',
        marginVertical: responsiveHeight(1)
    },
    places: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: responsiveFontSize(1.2),
        color: 'grey',
        marginTop: responsiveHeight(-1)
    },
})