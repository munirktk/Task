import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { Icon } from "react-native-elements";
import { appImages, colors, fontFamily } from "../global";



export const Header = (props) => {
    const { iconPress, title, home = false, titleColor } = props
    return (
        <View style={styles.mainView}>
            <View style={styles.innerView}>
                {
                    home === true ? (
                        <View style={styles.textView}>

                            <Icon
                                name="chevron-left"
                                type="feather"
                                size={responsiveFontSize(3)}
                                color={'white'}
                            />
                            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                            <View style={styles.logoView}>
                                <Image source={appImages.logo} style={styles.logo} />
                            </View>
                        </View>
                    ) : (
                        <View style={styles.textView}>
                            <TouchableOpacity
                                onPress={iconPress}
                                style={[styles.iconVIew]}>
                                <Icon
                                    name="chevron-left"
                                    type="feather"
                                    size={responsiveFontSize(3)}
                                    color={'black'}
                                />
                            </TouchableOpacity>
                            <Text style={styles.title}>{title}</Text>
                            <Icon
                                name="chevron-left"
                                type="feather"
                                size={responsiveFontSize(3)}
                                color={colors.primary}
                            />
                        </View>
                    )
                }
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: responsiveWidth(95),
        alignSelf: "center",
    },
    iconVIew: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: responsiveWidth(10),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white'
    },
    innerView: {
        marginTop: responsiveHeight(7),
        marginBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(3)
    },
    textView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: responsiveFontSize(2),
        color: 'white'
    },
    logo: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        resizeMode: "contain"
    },
    logoView: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: responsiveWidth(15),
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center"
    }
})