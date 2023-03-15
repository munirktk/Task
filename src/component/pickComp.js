import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { Icon } from "react-native-elements";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { appImages, fontFamily } from "../global";


export const PickComp = ({ image, name, des, dishes }) => {
    return (
        <TouchableOpacity style={styles.mainView}>
            <View style={styles.innerView}>
                <View style={styles.imageView}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.right}>
                    <View style={styles.topView}>
                        <Text style={styles.name}>{name}</Text>
                        <Icon
                            name="hearto"
                            type="ant-design"
                            size={responsiveFontSize(2)}
                            color={'grey'}
                        />
                    </View>
                    <View>
                        <Text style={styles.des}>{des}</Text>
                        <View style={styles.textVIew}>
                            <Image source={appImages.foodIcon} style={styles.imageIcon} />
                            <Text style={styles.dishes}>{dishes} Dishes</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: 'white',
        width: responsiveWidth(90),
        alignSelf: "center",
        marginVertical: responsiveHeight(1),
        borderRadius: responsiveWidth(3)
    },
    innerView: {
        marginVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        resizeMode: "contain"
    },
    imageView: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        borderRadius: responsiveWidth(3)
    },
    name: {
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: responsiveFontSize(1.5),
        color: 'black'
    },
    right: {
        width: responsiveWidth(60),
    },
    topView: {
        width: responsiveWidth(60),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    des: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(1.4),
        color: 'grey',
        marginTop: responsiveHeight(0.5)
    },
    imageIcon: {
        width: responsiveWidth(5),
        height: responsiveWidth(5)
    },
    textVIew: {
        flexDirection: "row",
        alignItems: "center"
    },
    dishes: {
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: responsiveFontSize(1.5),
        color: 'black',
        marginLeft: responsiveWidth(1),
        marginTop: 5
    }
})