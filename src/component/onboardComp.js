import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { fontFamily } from "../global";

export const OnBoardComp = (props) => {

    const { screenColor, image, heading, headingDec, first = true, sec = false, third = false, skipPress, iconPress } = props
    return (
        <View style={styles.container}>
            <View style={[styles.topView, { backgroundColor: screenColor }]}>
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.skip} onPress={skipPress}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                    <Image source={image} style={styles.image} />
                </View>
            </View>
            <View style={[styles.wrapper, { paddingTop: 0 }]}>
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>{heading}</Text>
                    <Text style={styles.headingText2}>{headingDec}</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.icons}>
                        {first === true ? (
                            <Icon
                                name="dot-circle-o"
                                size={responsiveFontSize(1.5)}
                                color={screenColor}
                                type='font-awesome'
                            />
                        ) : (
                            <Icon
                                name="dot-single"
                                size={responsiveFontSize(2)}
                                color={screenColor}
                                type='entypo'
                            />
                        )}
                        {sec === true ? (
                            <Icon
                                name="dot-circle-o"
                                size={responsiveFontSize(1.5)}
                                color={screenColor}
                                type='font-awesome'
                            />
                        ) : (
                            <Icon
                                name="dot-single"
                                size={responsiveFontSize(2)}
                                color={screenColor}
                                type='entypo'
                            />
                        )}
                        {third === true ? (
                            <Icon
                                name="dot-circle-o"
                                size={responsiveFontSize(1.5)}
                                color={screenColor}
                                type='font-awesome'
                            />
                        ) : (
                            <Icon
                                name="dot-single"
                                size={responsiveFontSize(2)}
                                color={screenColor}
                                type='entypo'
                            />
                        )}

                    </View>
                    <TouchableOpacity
                        onPress={iconPress}
                        style={[styles.iconVIew, { backgroundColor: screenColor }]}>
                        <Icon
                            name="chevron-right"
                            type="feather"
                            size={responsiveFontSize(3)}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    topView: {
        height: responsiveHeight(65),
        width: responsiveWidth(100),
        borderBottomLeftRadius: responsiveWidth(5),
        borderBottomRightRadius: responsiveWidth(5),

    },
    skip: {
        alignSelf: "flex-end"
    },
    wrapper: {
        width: responsiveWidth(90),
        alignSelf: "center",
        paddingTop: responsiveHeight(8)
    },
    skipText: {
        fontSize: responsiveFontSize(1.7),
        color: "white",
        fontFamily: fontFamily.appTextMedium
    },
    image: {
        width: responsiveWidth(60),
        height: responsiveWidth(80),
        resizeMode: "contain",
        alignSelf: "center"
    },
    headingView: {
        marginTop: responsiveWidth(5)
    },
    headingText: {
        fontSize: responsiveFontSize(4),
        fontFamily: fontFamily.appTextSemiBold,
        color: 'black'
    },
    headingText2: {
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(1.7),
        color: 'grey',
        marginTop: responsiveHeight(3)
    },
    iconVIew: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: responsiveWidth(10),
        alignItems: "center",
        justifyContent: "center"
    },
    bottom: {
        marginTop: responsiveHeight(4),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    icons: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    }
})