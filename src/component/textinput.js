import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';
import { fontFamily, colors } from '../global/index';

export const TxtInput = ({
    title,
    placeholder,
    onChangeText,
    MyStyles,
    value,
    itsStyle,
    iconName,
    iconType,
    error,
    iconStyles,
    iconSize,
    keyboardType,
    imageName,
    iconColor = '#2F2E41',
    apply = false,
    secureTextEntry,
    onPress,
    maxLength,
    onchange,
    numofline,
    err,
    PassName,
    PassType,
    right = false,
    left = false,
    multiline,
    editable = true,
    ...otherProps
}) => {
    return (
        <View style={[styles.mainView, MyStyles]}>
            <View style={styles.View}>
                <View style={styles.innerIcon}>
                    <Icon
                        name={iconName}
                        type={iconType}
                        size={responsiveFontSize(2.5)}
                        color={iconColor}
                    />

                    <View style={styles.inputView}>
                        <TextInput
                            editable={editable}
                            placeholder={placeholder}
                            style={[styles.TxtInput, itsStyle]}
                            onChange={onchange}
                            onChangeText={onChangeText}
                            placeholderTextColor="#000"
                            keyboardType={keyboardType}
                            secureTextEntry={secureTextEntry}
                            maxLength={maxLength}
                            numberOfLines={numofline}
                            multiline={multiline}
                            value={value}
                            {...otherProps}
                        />
                    </View>
                </View>

                {PassName && right && (
                    <TouchableOpacity onPress={onPress} style={{ marginLeft: responsiveWidth(2) }}>
                        <Icon
                            style={[iconStyles, styles.iconStyles]}
                            name={PassName}
                            type={PassType}
                            color={'black'}
                            size={iconSize ? iconSize : responsiveFontSize(2.5)}
                        />
                    </TouchableOpacity>
                )}
            </View>
            {error ? (
                <Text style={styles.error}>{error}</Text>
            ) : null}
        </View>
    );
};


const styles = StyleSheet.create({
    mainView: {
        width: responsiveWidth(90),
        alignSelf: 'center',
        backgroundColor: '#E7E7E7',
        marginVertical: responsiveHeight(1)
    },
    innerView: {
        paddingHorizontal: responsiveHeight(1),
        flexDirection: 'row',
        paddingLeft: responsiveWidth(3),
        alignItems: 'center',
    },
    titleText: {
        fontSize: responsiveFontSize(1.3),
        color: colors.grey,
        fontFamily: fontFamily.appTextSemiBold,
        paddingLeft: responsiveWidth(2),
    },
    TxtInput: {
        color: colors.grey,
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(1.7),
        marginLeft: Platform.OS === 'android' ? responsiveWidth(2) : responsiveWidth(4)
    },
    inputView: {
        flexDirection: 'row',
        alignSelf: "center",

    },
    View: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyles: {
        paddingRight: responsiveWidth(3)
    },
    error: {
        color: 'red',
        fontSize: responsiveFontSize(1.6),
        fontFamily: fontFamily.appTextMedium,
        marginLeft: responsiveWidth(2),
        padding: 3
    },
    innerIcon: {
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: responsiveWidth(3)
    }
})